
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE (user_id, role)
);

-- Create apartments table
CREATE TABLE public.apartments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  block TEXT NOT NULL,
  number TEXT NOT NULL,
  floor INTEGER NOT NULL DEFAULT 1,
  type TEXT NOT NULL DEFAULT 'Standard',
  bedrooms INTEGER NOT NULL DEFAULT 1,
  bathrooms INTEGER NOT NULL DEFAULT 1,
  balconies INTEGER NOT NULL DEFAULT 0,
  sqft INTEGER NOT NULL DEFAULT 500,
  rent NUMERIC NOT NULL DEFAULT 0,
  yearly_rent NUMERIC NOT NULL DEFAULT 0,
  furnishing TEXT NOT NULL DEFAULT 'Unfurnished',
  available BOOLEAN NOT NULL DEFAULT true,
  rating NUMERIC NOT NULL DEFAULT 0,
  reviews_count INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  unique_features TEXT[] DEFAULT '{}',
  accessibility TEXT[] DEFAULT '{}',
  amenities TEXT[] DEFAULT '{}',
  location TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create apartment_images table
CREATE TABLE public.apartment_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  apartment_id UUID REFERENCES public.apartments(id) ON DELETE CASCADE NOT NULL,
  image_url TEXT NOT NULL,
  image_type TEXT NOT NULL DEFAULT 'main',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  apartment_id UUID REFERENCES public.apartments(id) ON DELETE CASCADE NOT NULL,
  booking_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  total_amount NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.apartment_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  apartment_id UUID REFERENCES public.apartments(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apartment_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apartment_reviews ENABLE ROW LEVEL SECURITY;

-- Security definer function for role checks
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', ''));
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER update_apartments_updated_at BEFORE UPDATE ON public.apartments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- PROFILES RLS
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- USER_ROLES RLS
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- APARTMENTS RLS (public read, admin write)
CREATE POLICY "Anyone can view apartments" ON public.apartments FOR SELECT USING (true);
CREATE POLICY "Admins can insert apartments" ON public.apartments FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update apartments" ON public.apartments FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete apartments" ON public.apartments FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- APARTMENT_IMAGES RLS (public read, admin write)
CREATE POLICY "Anyone can view apartment images" ON public.apartment_images FOR SELECT USING (true);
CREATE POLICY "Admins can manage apartment images" ON public.apartment_images FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- BOOKINGS RLS
CREATE POLICY "Users can view own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can cancel own bookings" ON public.bookings FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all bookings" ON public.bookings FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- REVIEWS RLS
CREATE POLICY "Anyone can view reviews" ON public.apartment_reviews FOR SELECT USING (true);
CREATE POLICY "Users can create reviews" ON public.apartment_reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own reviews" ON public.apartment_reviews FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own reviews" ON public.apartment_reviews FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all reviews" ON public.apartment_reviews FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Storage bucket for apartment images
INSERT INTO storage.buckets (id, name, public) VALUES ('apartment-images', 'apartment-images', true);

CREATE POLICY "Anyone can view apartment images storage" ON storage.objects FOR SELECT USING (bucket_id = 'apartment-images');
CREATE POLICY "Admins can upload apartment images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'apartment-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update apartment images" ON storage.objects FOR UPDATE USING (bucket_id = 'apartment-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete apartment images" ON storage.objects FOR DELETE USING (bucket_id = 'apartment-images' AND public.has_role(auth.uid(), 'admin'));
