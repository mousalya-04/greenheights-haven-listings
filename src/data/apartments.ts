
export interface Apartment {
  id: string;
  number: string;
  block: string;
  rent: number;
  yearlyRent: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  floor: number;
  sqft: number;
  available: boolean;
  description: string;
  type: string;
  furnishing: string;
  features: string[];
  rating: number;
  reviews: number;
  uniqueFeatures: string[];
  accessibility: string[];
  images: {
    main: string;
    kitchen: string;
    livingRoom: string;
    bathroom: string;
    balcony: string;
    bedroom: string;
    diningArea: string;
  };
}

export const blockFeatures = {
  A: {
    name: 'Block A - Garden View',
    description: 'Modern apartments with beautiful garden views and premium amenities.',
    color: 'from-green-600 to-blue-600',
    image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=800&h=600&fit=crop',
    amenities: ['Garden View', 'Premium Fixtures', 'Modern Kitchen', 'Parking']
  },
  B: {
    name: 'Block B - City View',
    description: 'Contemporary living spaces with stunning city views and luxury features.',
    color: 'from-blue-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    amenities: ['City View', 'Smart Home Features', 'Gym Access', 'Swimming Pool']
  },
  C: {
    name: 'Block C - Premium Living',
    description: 'Luxury apartments with premium amenities and spacious layouts.',
    color: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    amenities: ['Luxury Fixtures', 'Private Garden', 'Club House', 'Concierge']
  }
};

export const apartments: Apartment[] = [
  {
    id: 'a101',
    number: 'A-101',
    block: 'A',
    rent: 25000,
    yearlyRent: 275000,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    sqft: 1200,
    available: true,
    description: 'Spacious 2BHK apartment with modern amenities and beautiful city view.',
    type: '2BHK',
    furnishing: 'Semi-Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Gym Access'],
    rating: 4.5,
    reviews: 23,
    uniqueFeatures: ['Corner Unit', 'Extra Storage', 'Private Balcony'],
    accessibility: ['Elevator Access', 'Wide Doorways', 'Ground Floor Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a102',
    number: 'A-102',
    block: 'A',
    rent: 28000,
    yearlyRent: 308000,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    sqft: 1400,
    available: true,
    description: 'Luxurious 3BHK apartment with premium fixtures and garden view.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Swimming Pool', 'Garden View'],
    rating: 4.7,
    reviews: 18,
    uniqueFeatures: ['Garden View', 'Premium Fixtures', 'Walk-in Closet'],
    accessibility: ['Elevator Access', 'Wheelchair Accessible', 'Emergency Exits'],
    images: {
      main: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a103',
    number: 'A-103',
    block: 'A',
    rent: 22000,
    yearlyRent: 242000,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    sqft: 800,
    available: false,
    description: 'Cozy 1BHK apartment perfect for singles or couples.',
    type: '1BHK',
    furnishing: 'Unfurnished',
    features: ['Air Conditioning', 'Basic Kitchen', 'Parking'],
    rating: 4.2,
    reviews: 12,
    uniqueFeatures: ['Compact Design', 'Efficient Layout'],
    accessibility: ['Elevator Access', 'Ground Floor Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b101',
    number: 'B-101',
    block: 'B',
    rent: 30000,
    yearlyRent: 330000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 1,
    sqft: 1600,
    available: true,
    description: 'Premium 3BHK apartment with multiple balconies and modern amenities.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Gym Access', 'Club House'],
    rating: 4.8,
    reviews: 25,
    uniqueFeatures: ['Double Balcony', 'Premium Location', 'Modern Fixtures'],
    accessibility: ['Elevator Access', 'Wheelchair Accessible', 'Wide Hallways'],
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b102',
    number: 'B-102',
    block: 'B',
    rent: 26000,
    yearlyRent: 286000,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    sqft: 1300,
    available: true,
    description: 'Elegant 2BHK apartment with contemporary design and city view.',
    type: '2BHK',
    furnishing: 'Semi-Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Swimming Pool'],
    rating: 4.6,
    reviews: 19,
    uniqueFeatures: ['City View', 'Contemporary Design', 'Open Layout'],
    accessibility: ['Elevator Access', 'Emergency Exits', 'Ground Floor Access'],
    images: {
      main: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b103',
    number: 'B-103',
    block: 'B',
    rent: 32000,
    yearlyRent: 352000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 1,
    sqft: 1700,
    available: false,
    description: 'Spacious 3BHK penthouse with premium amenities and panoramic view.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Gym Access', 'Terrace Garden'],
    rating: 4.9,
    reviews: 14,
    uniqueFeatures: ['Penthouse Style', 'Panoramic View', 'Terrace Garden'],
    accessibility: ['Private Elevator', 'Wheelchair Accessible', 'Premium Access'],
    images: {
      main: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b104',
    number: 'B-104',
    block: 'B',
    rent: 24000,
    yearlyRent: 264000,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    sqft: 1100,
    available: true,
    description: 'Modern 2BHK apartment with smart home features.',
    type: '2BHK',
    furnishing: 'Semi-Furnished',
    features: ['Air Conditioning', 'Smart Home', 'Parking', 'Security'],
    rating: 4.4,
    reviews: 16,
    uniqueFeatures: ['Smart Home Technology', 'Modern Design', 'Security Features'],
    accessibility: ['Elevator Access', 'Smart Controls', 'Emergency Systems'],
    images: {
      main: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c101',
    number: 'C-101',
    block: 'C',
    rent: 35000,
    yearlyRent: 385000,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 2,
    floor: 1,
    sqft: 2000,
    available: true,
    description: 'Luxury 4BHK apartment with premium amenities and garden view.',
    type: '4BHK',
    furnishing: 'Fully Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Private Garden', 'Club House'],
    rating: 4.9,
    reviews: 21,
    uniqueFeatures: ['4 Bedroom Layout', 'Private Garden Access', 'Luxury Finishes'],
    accessibility: ['Private Entrance', 'Wheelchair Accessible', 'Premium Facilities'],
    images: {
      main: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c102',
    number: 'C-102',
    block: 'C',
    rent: 29000,
    yearlyRent: 319000,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    sqft: 1500,
    available: false,
    description: 'Beautiful 3BHK apartment with modern amenities and great lighting.',
    type: '3BHK',
    furnishing: 'Semi-Furnished',
    features: ['Air Conditioning', 'Modular Kitchen', 'Parking', 'Gym Access'],
    rating: 4.5,
    reviews: 17,
    uniqueFeatures: ['Natural Lighting', 'Open Floor Plan', 'Modern Amenities'],
    accessibility: ['Elevator Access', 'Wide Doorways', 'Accessible Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=300&fit=crop'
    }
  }
];
