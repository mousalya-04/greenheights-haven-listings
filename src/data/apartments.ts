
export interface Apartment {
  id: string;
  number: string;
  block: string;
  rent: number;
  yearlyRent: number;
  sqft: number; // Changed from 'size' to 'sqft'
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
  features: string[]; // Changed from 'amenities' to 'features'
  description: string;
  uniqueFeatures: string[];
  image: string;
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
  // Block A - Garden Paradise (5 apartments)
  {
    id: 'a101',
    number: 'A-101',
    block: 'A',
    rent: 18000,
    yearlyRent: 216000,
    sqft: 850, // Changed from 'size' to 'sqft'
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.3,
    reviews: 12,
    type: '1BHK',
    accessibility: ['Ground Floor', 'Wheelchair Accessible', 'Dedicated Parking'],
    features: ['Garden View', 'Parking', 'Wi-Fi', '24/7 Water Supply'], // Changed from 'amenities' to 'features'
    description: 'Beautiful ground floor apartment with garden access and modern amenities.',
    uniqueFeatures: ['Garden Access', 'Corner Unit', 'Extra Storage'],
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
    id: 'a203',
    number: 'A-203',
    block: 'A',
    rent: 22000,
    yearlyRent: 264000,
    sqft: 1100,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.5,
    reviews: 8,
    type: '2BHK',
    accessibility: ['Elevator Access', 'Dedicated Parking'],
    features: ['Garden View', 'Parking', 'Security', 'Gym Access'],
    description: 'Spacious 2BHK with panoramic garden views and premium fittings.',
    uniqueFeatures: ['Panoramic Views', 'Premium Fittings', 'Extra Balcony Space'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a305',
    number: 'A-305',
    block: 'A',
    rent: 25000,
    yearlyRent: 300000,
    sqft: 1300,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 3,
    furnishing: 'Furnished',
    available: false,
    rating: 4.7,
    reviews: 15,
    type: '3BHK',
    accessibility: ['Elevator Access', 'Dedicated Parking'],
    features: ['Rooftop Garden Access', 'Premium Interiors', 'Smart Home'],
    description: 'Luxurious 3BHK with rooftop garden access and smart home features.',
    uniqueFeatures: ['Rooftop Access', 'Smart Home Integration', 'Premium Location'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-b14ea2c5b0db?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a401',
    number: 'A-401',
    block: 'A',
    rent: 16500,
    yearlyRent: 198000,
    sqft: 750,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 4,
    furnishing: 'Unfurnished',
    available: true,
    rating: 4.1,
    reviews: 6,
    type: 'Studio',
    accessibility: ['Elevator Access'],
    features: ['Garden View', 'Compact Living', 'High Floor'],
    description: 'Modern studio apartment with efficient space utilization and garden views.',
    uniqueFeatures: ['High Floor', 'Efficient Layout', 'Modern Design'],
    image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908114-815748dd4514?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a502',
    number: 'A-502',
    block: 'A',
    rent: 35000,
    yearlyRent: 420000,
    sqft: 2000,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 2,
    floor: 5,
    furnishing: 'Furnished',
    available: true,
    rating: 4.8,
    reviews: 10,
    type: 'Duplex',
    accessibility: ['Elevator Access', 'Premium Parking'],
    features: ['Duplex Layout', 'Rooftop Terrace', 'Premium Amenities'],
    description: 'Luxurious duplex apartment with private rooftop terrace and premium amenities.',
    uniqueFeatures: ['Duplex Design', 'Private Terrace', 'Premium Finishes'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909195-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },

  // Block B - Fitness Hub (4 apartments)
  {
    id: 'b104',
    number: 'B-104',
    block: 'B',
    rent: 19500,
    yearlyRent: 234000,
    sqft: 900,
    bedrooms: 2,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.4,
    reviews: 9,
    type: '2BHK',
    accessibility: ['Ground Floor', 'Gym Access'],
    features: ['Direct Gym Access', 'Yoga Studio', 'Wellness Center'],
    description: 'Perfect for fitness enthusiasts with direct gym access and wellness facilities.',
    uniqueFeatures: ['Gym Proximity', 'Wellness Access', 'Health-focused Community'],
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1486304873000-235643847519?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-c5dcee191493?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b205',
    number: 'B-205',
    block: 'B',
    rent: 24000,
    yearlyRent: 288000,
    sqft: 1200,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    furnishing: 'Furnished',
    available: false,
    rating: 4.6,
    reviews: 14,
    type: '2BHK',
    accessibility: ['Elevator Access', 'Premium Gym'],
    features: ['Premium Gym Equipment', 'Personal Training', 'Spa Access'],
    description: 'Premium apartment with access to exclusive fitness facilities and spa services.',
    uniqueFeatures: ['Premium Gym Access', 'Spa Services', 'Personal Training'],
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908795-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b302',
    number: 'B-302',
    block: 'B',
    rent: 17000,
    yearlyRent: 204000,
    sqft: 800,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 3,
    furnishing: 'Unfurnished',
    available: true,
    rating: 4.2,
    reviews: 7,
    type: '1BHK',
    accessibility: ['Elevator Access'],
    features: ['Cardio Equipment Access', 'Yoga Classes', 'Health Monitoring'],
    description: 'Compact apartment ideal for health-conscious individuals with fitness access.',
    uniqueFeatures: ['Health Monitoring', 'Fitness Classes', 'Wellness Community'],
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908114-c5dcee191493?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b403',
    number: 'B-403',
    block: 'B',
    rent: 28000,
    yearlyRent: 336000,
    sqft: 1400,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 4,
    furnishing: 'Furnished',
    available: true,
    rating: 4.7,
    reviews: 11,
    type: '3BHK',
    accessibility: ['Elevator Access', 'VIP Gym'],
    features: ['VIP Gym Access', 'Personal Trainer', 'Nutritionist Consult'],
    description: 'Spacious family apartment with VIP fitness amenities and personal wellness services.',
    uniqueFeatures: ['VIP Fitness Access', 'Personal Wellness', 'Family-friendly'],
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909195-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },

  // Block C - Family Zone (4 apartments)
  {
    id: 'c102',
    number: 'C-102',
    block: 'C',
    rent: 21000,
    yearlyRent: 252000,
    sqft: 1050,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 1,
    furnishing: 'Furnished',
    available: true,
    rating: 4.5,
    reviews: 16,
    type: '2BHK',
    accessibility: ['Ground Floor', 'Kids Play Area'],
    features: ['Kids Playground', 'Family Lounge', 'Study Room'],
    description: 'Perfect family apartment with easy access to children play areas and family facilities.',
    uniqueFeatures: ['Kid-friendly', 'Family Spaces', 'Safe Environment'],
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908795-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c204',
    number: 'C-204',
    block: 'C',
    rent: 26000,
    yearlyRent: 312000,
    sqft: 1300,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    furnishing: 'Semi-furnished',
    available: false,
    rating: 4.6,
    reviews: 18,
    type: '3BHK',
    accessibility: ['Elevator Access', 'Child Safety'],
    features: ['Game Room', 'Study Area', 'Children Library'],
    description: 'Spacious family apartment with dedicated study areas and recreational facilities for children.',
    uniqueFeatures: ['Study Areas', 'Game Room Access', 'Child Safety Features'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909195-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c301',
    number: 'C-301',
    block: 'C',
    rent: 23500,
    yearlyRent: 282000,
    sqft: 1150,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 3,
    furnishing: 'Furnished',
    available: true,
    rating: 4.4,
    reviews: 13,
    type: '2BHK',
    accessibility: ['Elevator Access', 'Kid Safety'],
    features: ['Play Area Access', 'Study Corner', 'Family Events'],
    description: 'Well-designed 2BHK with family-centric amenities and child-safe features.',
    uniqueFeatures: ['Child Safety', 'Family Events', 'Study Corner'],
    image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908114-815748dd4514?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c405',
    number: 'C-405',
    block: 'C',
    rent: 29000,
    yearlyRent: 348000,
    sqft: 1450,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 4,
    furnishing: 'Furnished',
    available: true,
    rating: 4.8,
    reviews: 20,
    type: '3BHK',
    accessibility: ['Elevator Access', 'Premium Family'],
    features: ['Premium Play Area', 'Private Study', 'Family Dining'],
    description: 'Premium family apartment with exclusive amenities and spacious layout.',
    uniqueFeatures: ['Premium Family Amenities', 'Private Study', 'Spacious Layout'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909195-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },

  // Block D - Community Hub (4 apartments)
  {
    id: 'd103',
    number: 'D-103',
    block: 'D',
    rent: 20000,
    yearlyRent: 240000,
    sqft: 950,
    bedrooms: 2,
    bathrooms: 1,
    balconies: 1,
    floor: 1,
    furnishing: 'Semi-furnished',
    available: true,
    rating: 4.3,
    reviews: 11,
    type: '2BHK',
    accessibility: ['Ground Floor', 'Event Access'],
    features: ['Community Hall Access', 'Event Participation', 'Social Lounge'],
    description: 'Perfect for social individuals with direct community hall access and event facilities.',
    uniqueFeatures: ['Community Access', 'Event Facilities', 'Social Networking'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-b14ea2c5b0db?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd202',
    number: 'D-202',
    block: 'D',
    rent: 24500,
    yearlyRent: 294000,
    sqft: 1100,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    furnishing: 'Furnished',
    available: true,
    rating: 4.5,
    reviews: 14,
    type: '2BHK',
    accessibility: ['Elevator Access', 'Meeting Rooms'],
    features: ['Meeting Room Access', 'Business Lounge', 'Event Hosting'],
    description: 'Ideal for professionals with meeting room access and business amenities.',
    uniqueFeatures: ['Business Amenities', 'Meeting Rooms', 'Professional Network'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd304',
    number: 'D-304',
    block: 'D',
    rent: 18500,
    yearlyRent: 222000,
    sqft: 800,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: 3,
    furnishing: 'Unfurnished',
    available: false,
    rating: 4.2,
    reviews: 8,
    type: '1BHK',
    accessibility: ['Elevator Access'],
    features: ['Community Events', 'Social Gatherings', 'Networking'],
    description: 'Compact apartment perfect for individuals who enjoy community activities.',
    uniqueFeatures: ['Community Focus', 'Social Events', 'Networking Opportunities'],
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd401',
    number: 'D-401',
    block: 'D',
    rent: 27000,
    yearlyRent: 324000,
    sqft: 1350,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 4,
    furnishing: 'Furnished',
    available: true,
    rating: 4.6,
    reviews: 17,
    type: '3BHK',
    accessibility: ['Elevator Access', 'Premium Community'],
    features: ['Premium Community Access', 'Private Events', 'Executive Lounge'],
    description: 'Spacious 3BHK with premium community amenities and executive access.',
    uniqueFeatures: ['Executive Access', 'Premium Community', 'Private Events'],
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556908795-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },

  // Block E - Rooftop Retreat (3 apartments)
  {
    id: 'e201',
    number: 'E-201',
    block: 'E',
    rent: 32000,
    yearlyRent: 384000,
    sqft: 1600,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    furnishing: 'Furnished',
    available: true,
    rating: 4.9,
    reviews: 22,
    type: '3BHK',
    accessibility: ['Elevator Access', 'Rooftop Access'],
    features: ['Rooftop Lounge Access', 'Sky Dining', 'Premium Views'],
    description: 'Premium apartment with exclusive rooftop access and panoramic city views.',
    uniqueFeatures: ['Rooftop Access', 'Premium Views', 'Sky Dining'],
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-c5dcee191493?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'e305',
    number: 'E-305',
    block: 'E',
    rent: 38000,
    yearlyRent: 456000,
    sqft: 1800,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 3,
    floor: 3,
    furnishing: 'Furnished',
    available: true,
    rating: 4.9,
    reviews: 25,
    type: '4BHK',
    accessibility: ['Elevator Access', 'VIP Rooftop'],
    features: ['VIP Rooftop Access', 'Private Sky Dining', '360° Views'],
    description: 'Luxurious 4BHK with VIP rooftop privileges and exclusive amenities.',
    uniqueFeatures: ['VIP Rooftop', 'Private Sky Dining', '360° City Views'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909195-4e6c0b13dae2?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'e401',
    number: 'E-401',
    block: 'E',
    rent: 42000,
    yearlyRent: 504000,
    sqft: 2200,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 3,
    floor: 4,
    furnishing: 'Furnished',
    available: false,
    rating: 5.0,
    reviews: 18,
    type: 'Duplex',
    accessibility: ['Elevator Access', 'Executive Rooftop'],
    features: ['Executive Rooftop', 'Private Terrace', 'Concierge Service'],
    description: 'Ultimate luxury duplex with executive rooftop access and concierge services.',
    uniqueFeatures: ['Executive Rooftop', 'Concierge Service', 'Ultimate Luxury'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-b14ea2c5b0db?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      dining: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop'
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

