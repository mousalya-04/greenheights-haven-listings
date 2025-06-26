
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
    color: 'from-slate-600 to-slate-800',
    image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=800&h=600&fit=crop',
    amenities: ['Garden View', 'Premium Fixtures', 'Modern Kitchen', 'Parking']
  },
  B: {
    name: 'Block B - City View',
    description: 'Contemporary living spaces with stunning city views and luxury features.',
    color: 'from-gray-700 to-gray-900',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    amenities: ['City View', 'Smart Home Features', 'Gym Access', 'Swimming Pool']
  },
  C: {
    name: 'Block C - Premium Living',
    description: 'Luxury apartments with premium amenities and spacious layouts.',
    color: 'from-stone-600 to-stone-800',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    amenities: ['Luxury Fixtures', 'Private Garden', 'Club House', 'Concierge']
  },
  D: {
    name: 'Block D - Executive Suites',
    description: 'Sophisticated executive apartments with panoramic views and premium facilities.',
    color: 'from-neutral-700 to-neutral-900',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    amenities: ['Executive Lounge', 'Conference Room', 'Business Center', 'Valet Service']
  },
  E: {
    name: 'Block E - Penthouse Collection',
    description: 'Ultra-luxury penthouse apartments with exclusive amenities and personalized services.',
    color: 'from-zinc-700 to-zinc-900',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    amenities: ['Private Elevator', 'Sky Lounge', 'Personal Butler', 'Exclusive Terrace']
  }
};

export const apartments: Apartment[] = [
  // Block A Apartments
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
    description: 'Spacious 2BHK apartment with modern amenities and beautiful garden view.',
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
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
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
    floor: 2,
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
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop'
    }
  },
  // Block B Apartments
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
      kitchen: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop'
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
    floor: 2,
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
      kitchen: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=400&h=300&fit=crop'
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
    floor: 3,
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
      livingRoom: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=300&fit=crop'
    }
  },
  // Block C Apartments
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
      kitchen: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop'
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
      kitchen: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop'
    }
  },
  // Block D Apartments (New Executive Suites)
  {
    id: 'd101',
    number: 'D-101',
    block: 'D',
    rent: 45000,
    yearlyRent: 495000,
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    floor: 1,
    sqft: 2200,
    available: true,
    description: 'Executive 4BHK suite with panoramic city views and premium business amenities.',
    type: '4BHK',
    furnishing: 'Fully Furnished',
    features: ['Smart Home System', 'Executive Lounge', 'Business Center', 'Concierge Service'],
    rating: 4.9,
    reviews: 32,
    uniqueFeatures: ['Executive Suite', 'Home Office', 'Premium Interiors'],
    accessibility: ['VIP Elevator', 'Valet Parking', 'Butler Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1604709177595-ee9c2580e9c9?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd102',
    number: 'D-102',
    block: 'D',
    rent: 38000,
    yearlyRent: 418000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 2,
    sqft: 1800,
    available: true,
    description: 'Sophisticated 3BHK executive apartment with modern amenities.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Smart Home', 'Executive Facilities', 'Premium Kitchen', 'Study Room'],
    rating: 4.7,
    reviews: 28,
    uniqueFeatures: ['Executive Design', 'Smart Controls', 'Premium Appliances'],
    accessibility: ['Private Entrance', 'Executive Parking', 'Priority Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1517263104271-d31ca2b12821?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd103',
    number: 'D-103',
    block: 'D',
    rent: 42000,
    yearlyRent: 462000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 3,
    sqft: 1900,
    available: false,
    description: 'Premium executive apartment with luxury amenities and city skyline view.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Premium Interiors', 'Smart Automation', 'Executive Club', 'Valet Service'],
    rating: 4.8,
    reviews: 24,
    uniqueFeatures: ['Skyline View', 'Executive Club Access', 'Premium Service'],
    accessibility: ['Dedicated Elevator', 'Valet Parking', 'Concierge Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'd201',
    number: 'D-201',
    block: 'D',
    rent: 40000,
    yearlyRent: 440000,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    sqft: 1750,
    available: true,
    description: 'Elegant executive suite with modern design and premium facilities.',
    type: '3BHK',
    furnishing: 'Semi-Furnished',
    features: ['Executive Lounge', 'Business Center Access', 'Premium Kitchen', 'Study Area'],
    rating: 4.6,
    reviews: 19,
    uniqueFeatures: ['Executive Layout', 'Business Facilities', 'Premium Design'],
    accessibility: ['Executive Floor', 'Priority Parking', 'Premium Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop'
    }
  },
  // Block E Apartments (New Penthouse Collection)
  {
    id: 'e101',
    number: 'E-101',
    block: 'E',
    rent: 65000,
    yearlyRent: 715000,
    bedrooms: 5,
    bathrooms: 5,
    balconies: 4,
    floor: 1,
    sqft: 3000,
    available: true,
    description: 'Ultra-luxury 5BHK penthouse with panoramic views and exclusive amenities.',
    type: '5BHK',
    furnishing: 'Fully Furnished',
    features: ['Private Elevator', 'Sky Lounge', 'Personal Butler', 'Exclusive Terrace'],
    rating: 5.0,
    reviews: 15,
    uniqueFeatures: ['Penthouse Suite', 'Private Terrace', 'Butler Service'],
    accessibility: ['Private Elevator', 'Exclusive Access', 'Butler Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1517263104271-d31ca2b12821?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'e102',
    number: 'E-102',
    block: 'E',
    rent: 55000,
    yearlyRent: 605000,
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    floor: 2,
    sqft: 2500,
    available: true,
    description: 'Luxury 4BHK penthouse with premium amenities and city views.',
    type: '4BHK',
    furnishing: 'Fully Furnished',
    features: ['Sky Terrace', 'Premium Interiors', 'Smart Home', 'Concierge Service'],
    rating: 4.9,
    reviews: 22,
    uniqueFeatures: ['Sky Terrace', 'Premium Design', 'Smart Automation'],
    accessibility: ['Penthouse Elevator', 'Exclusive Parking', 'Premium Service'],
    images: {
      main: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'e103',
    number: 'E-103',
    block: 'E',
    rent: 58000,
    yearlyRent: 638000,
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    floor: 3,
    sqft: 2600,
    available: false,
    description: 'Exclusive penthouse with luxury amenities and breathtaking panoramic views.',
    type: '4BHK',
    furnishing: 'Fully Furnished',
    features: ['Panoramic Views', 'Luxury Suite', 'Private Terrace', 'Butler Service'],
    rating: 4.8,
    reviews: 18,
    uniqueFeatures: ['Panoramic Views', 'Luxury Suite', 'Exclusive Design'],
    accessibility: ['Private Access', 'Luxury Elevator', 'Exclusive Services'],
    images: {
      main: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1604709177595-ee9c2580e9c9?w=400&h=300&fit=crop'
    }
  },
  // Additional Apartments to reach 20 total
  {
    id: 'a201',
    number: 'A-201',
    block: 'A',
    rent: 27000,
    yearlyRent: 297000,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 2,
    sqft: 1250,
    available: true,
    description: 'Modern 2BHK apartment with garden view and premium amenities.',
    type: '2BHK',
    furnishing: 'Semi-Furnished',
    features: ['Garden View', 'Modern Kitchen', 'Parking', 'Gym Access'],
    rating: 4.4,
    reviews: 16,
    uniqueFeatures: ['Garden Access', 'Premium Location', 'Modern Design'],
    accessibility: ['Elevator Access', 'Wide Corridors', 'Accessible Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b201',
    number: 'B-201',
    block: 'B',
    rent: 31000,
    yearlyRent: 341000,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    floor: 2,
    sqft: 1550,
    available: true,
    description: 'Spacious 3BHK apartment with city views and modern amenities.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['City View', 'Double Balcony', 'Premium Kitchen', 'Swimming Pool'],
    rating: 4.7,
    reviews: 20,
    uniqueFeatures: ['City Skyline View', 'Double Balcony', 'Premium Interiors'],
    accessibility: ['Elevator Access', 'Wide Doorways', 'Premium Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'c201',
    number: 'C-201',
    block: 'C',
    rent: 36000,
    yearlyRent: 396000,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: 2,
    sqft: 1650,
    available: true,
    description: 'Premium 3BHK apartment with luxury amenities and garden access.',
    type: '3BHK',
    furnishing: 'Fully Furnished',
    features: ['Luxury Fixtures', 'Garden Access', 'Premium Kitchen', 'Club House'],
    rating: 4.6,
    reviews: 26,
    uniqueFeatures: ['Luxury Design', 'Garden View', 'Premium Amenities'],
    accessibility: ['Premium Access', 'Wide Hallways', 'Luxury Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'a301',
    number: 'A-301',
    block: 'A',
    rent: 24000,
    yearlyRent: 264000,
    bedrooms: 2,
    bathrooms: 1,
    balconies: 1,
    floor: 3,
    sqft: 1100,
    available: false,
    description: 'Cozy 2BHK apartment with modern amenities and garden view.',
    type: '2BHK',
    furnishing: 'Unfurnished',
    features: ['Garden View', 'Basic Kitchen', 'Parking', 'Community Garden'],
    rating: 4.3,
    reviews: 14,
    uniqueFeatures: ['Top Floor', 'Garden View', 'Peaceful Environment'],
    accessibility: ['Elevator Access', 'Standard Parking', 'Basic Amenities'],
    images: {
      main: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop'
    }
  },
  {
    id: 'b301',
    number: 'B-301',
    block: 'B',
    rent: 28000,
    yearlyRent: 308000,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 3,
    sqft: 1350,
    available: true,
    description: 'Modern 2BHK apartment with city view and contemporary design.',
    type: '2BHK',
    furnishing: 'Semi-Furnished',
    features: ['City View', 'Modern Design', 'Premium Kitchen', 'Gym Access'],
    rating: 4.5,
    reviews: 17,
    uniqueFeatures: ['Top Floor View', 'Modern Interiors', 'City Skyline'],
    accessibility: ['Elevator Access', 'Modern Amenities', 'Premium Parking'],
    images: {
      main: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=300&fit=crop',
      kitchen: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400&h=300&fit=crop',
      livingRoom: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      bathroom: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?w=400&h=300&fit=crop',
      balcony: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      bedroom: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      diningArea: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=300&fit=crop'
    }
  }
];
