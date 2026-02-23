
-- Create schedule_visits table
CREATE TABLE public.schedule_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_apartment TEXT,
  visit_date DATE NOT NULL,
  visit_time TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.schedule_visits ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a visit request
CREATE POLICY "Anyone can create visit requests"
ON public.schedule_visits FOR INSERT
WITH CHECK (true);

-- Admins can view and manage all visits
CREATE POLICY "Admins can manage all visits"
ON public.schedule_visits FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create facility_images table for admin-managed facility images
CREATE TABLE public.facility_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  facility_id TEXT NOT NULL,
  image_url TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.facility_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view facility images"
ON public.facility_images FOR SELECT
USING (true);

CREATE POLICY "Admins can manage facility images"
ON public.facility_images FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for schedule_visits updated_at
CREATE TRIGGER update_schedule_visits_updated_at
BEFORE UPDATE ON public.schedule_visits
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at();
