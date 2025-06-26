

export interface Apartment {
  id: string;
  block: string;
  number: string;
  floor: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  sqft: number;
  rent: number;
  yearlyRent: number;
  furnishing: string;
  available: boolean;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  uniqueFeatures: string[];
  accessibility: string[];
  images: {
    main: string;
    livingRoom: string;
    kitchen: string;
    bedroom: string;
    bathroom: string;
    balcony: string;
    diningArea: string;
  };
}

export interface BlockFeature {
  name: string;
  description: string;
  amenities: string[];
  color: string;
  image: string;
}

