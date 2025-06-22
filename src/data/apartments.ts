
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
  image: string;
}

export const apartments: Apartment[] = [
  // Block A
  {
    id: 'a101',
    number: '101',
    block: 'A',
    rent: 25000,
    size: 1200,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.5,
    reviews: 12,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  },
  {
    id: 'a102',
    number: '102',
    block: 'A',
    rent: 23000,
    size: 1100,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.2,
    reviews: 8,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
  },
  {
    id: 'a201',
    number: '201',
    block: 'A',
    rent: 27000,
    size: 1300,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    furnishing: 'Furnished',
    available: false,
    rating: 4.7,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  },
  // Block B
  {
    id: 'b101',
    number: '101',
    block: 'B',
    rent: 30000,
    size: 1400,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.8,
    reviews: 20,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
  },
  {
    id: 'b102',
    number: '102',
    block: 'B',
    rent: 28000,
    size: 1250,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.4,
    reviews: 10,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  },
  // Block C
  {
    id: 'c101',
    number: '101',
    block: 'C',
    rent: 26000,
    size: 1150,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Unfurnished',
    available: true,
    rating: 4.3,
    reviews: 7,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
  },
  {
    id: 'c201',
    number: '201',
    block: 'C',
    rent: 29000,
    size: 1350,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    furnishing: 'Furnished',
    available: true,
    rating: 4.6,
    reviews: 14,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  },
  // Block D
  {
    id: 'd101',
    number: '101',
    block: 'D',
    rent: 24000,
    size: 1050,
    bedrooms: 2,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.1,
    reviews: 6,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
  },
  {
    id: 'd102',
    number: '102',
    block: 'D',
    rent: 25500,
    size: 1100,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Furnished',
    available: false,
    rating: 4.4,
    reviews: 9,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  },
  // Block E
  {
    id: 'e101',
    number: '101',
    block: 'E',
    rent: 35000,
    size: 1600,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 2,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.9,
    reviews: 25,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
  },
  {
    id: 'e201',
    number: '201',
    block: 'E',
    rent: 32000,
    size: 1500,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 2,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.7,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  }
];

export const blockFeatures = {
  A: {
    name: 'Block A - Garden View',
    feature: 'Rooftop Garden',
    description: 'Enjoy serene garden views with our beautiful rooftop garden featuring organic vegetables and flowers.',
    amenities: ['Rooftop Garden', 'Garden View Apartments', 'Community Gardening']
  },
  B: {
    name: 'Block B - Premium Living',
    feature: 'Premium Units',
    description: 'Luxurious apartments with premium fittings and spacious layouts for sophisticated living.',
    amenities: ['Premium Interiors', 'Larger Apartments', 'High-end Fixtures']
  },
  C: {
    name: 'Block C - Fitness Hub',
    feature: 'Fitness Center',
    description: 'Stay fit with our modern gym facility equipped with latest exercise equipment.',
    amenities: ['Modern Gym', 'Yoga Studio', 'Fitness Programs']
  },
  D: {
    name: 'Block D - Family Zone',
    feature: 'Family Friendly',
    description: 'Perfect for families with dedicated play areas and family-oriented amenities.',
    amenities: ['Kids Play Area', 'Family Lounge', 'Study Room']
  },
  E: {
    name: 'Block E - Executive Suites',
    feature: 'Executive Living',
    description: 'Premium executive apartments with enhanced privacy and luxury amenities.',
    amenities: ['Executive Lounges', 'Private Parking', 'Concierge Service']
  }
};
