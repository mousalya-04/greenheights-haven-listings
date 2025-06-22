
export interface Apartment {
  id: string;
  number: string;
  block: string;
  rent: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  floor: number;
  furnishing: 'Furnished' | 'Semi-furnished' | 'Unfurnished';
  available: boolean;
  rating: number;
  reviews: number;
  type: 'Studio' | '1BHK' | '2BHK' | '3BHK' | '4BHK' | 'Duplex';
  accessibility: string[];
  amenities: string[];
  image: string; // Main display image
  images: {
    main: string;
    kitchen: string;
    livingRoom: string;
    bedroom: string;
    bathroom: string;
    balcony: string;
    dining?: string;
  };
}

export const apartments: Apartment[] = [
  // Block A - Garden View Apartments (15 units)
  {
    id: 'a101',
    number: '101',
    block: 'A',
    rent: 18000,
    size: 850,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.3,
    reviews: 12,
    type: '1BHK',
    accessibility: ['Ground Floor', 'Wheelchair Accessible'],
    amenities: ['Garden View', 'Parking', 'Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a102',
    number: '102',
    block: 'A',
    rent: 22000,
    size: 1100,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.5,
    reviews: 8,
    type: '2BHK',
    accessibility: ['Ground Floor', 'Elevator Access'],
    amenities: ['Garden View', 'Parking', 'Security'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a103',
    number: '103',
    block: 'A',
    rent: 16500,
    size: 750,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Unfurnished',
    available: false,
    rating: 4.1,
    reviews: 15,
    type: 'Studio',
    accessibility: ['Ground Floor'],
    amenities: ['Garden View', 'Compact Living'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-b14ea2c5b0db?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop'
    }
  }
];

export const blockFeatures = {
  A: {
    name: 'Block A - Garden Paradise',
    feature: 'Rooftop Garden & Green Spaces',
    description: 'Immerse yourself in nature with our beautiful rooftop gardens, organic vegetable patches, and lush green landscapes.',
    amenities: ['Rooftop Garden', 'Organic Farming Area', 'Garden View Apartments', 'Green Spaces'],
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
    color: 'from-green-400 to-green-600'
  },
  B: {
    name: 'Block B - Fitness Hub',
    feature: 'Modern Gym & Wellness Center',
    description: 'Stay fit and healthy with our state-of-the-art fitness center, yoga studio, and wellness facilities.',
    amenities: ['Modern Gym', 'Yoga Studio', 'Cardio Equipment', 'Personal Training'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    color: 'from-blue-400 to-blue-600'
  },
  C: {
    name: 'Block C - Family Zone',
    feature: 'Kids Play Area & Family Spaces',
    description: 'Perfect for families with dedicated play areas, family lounges, and child-friendly amenities.',
    amenities: ['Kids Playground', 'Family Lounge', 'Study Room', 'Game Room'],
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop',
    color: 'from-purple-400 to-purple-600'
  },
  D: {
    name: 'Block D - Community Hub',
    feature: 'Event Hall & Social Spaces',
    description: 'Connect with neighbors in our vibrant community spaces, event halls, and social gathering areas.',
    amenities: ['Community Hall', 'Event Space', 'Social Lounge', 'Meeting Rooms'],
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
    color: 'from-orange-400 to-orange-600'
  },
  E: {
    name: 'Block E - Rooftop Retreat',
    feature: 'Rooftop Lounge & Sky Dining',
    description: 'Experience luxury living with our exclusive rooftop lounges, sky dining areas, and panoramic city views.',
    amenities: ['Rooftop Lounge', 'Sky Dining', '360° City Views', 'Executive Amenities'],
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop',
    color: 'from-red-400 to-red-600'
  }
};
