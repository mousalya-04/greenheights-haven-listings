
import React from 'react';
import { Heart, ShoppingCart, Star, MapPin } from 'lucide-react';

interface ApartmentCardProps {
  apartment: {
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
  };
  onAddToFavorites: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ 
  apartment, 
  onAddToFavorites, 
  onAddToCart 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48">
        <img 
          src={apartment.image} 
          alt={`Apartment ${apartment.number}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <button 
            onClick={() => onAddToFavorites(apartment.id)}
            className="text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart size={18} />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            apartment.available 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {apartment.available ? 'Available' : 'Occupied'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {apartment.block}-{apartment.number}
            </h3>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-1" />
              Block {apartment.block}, Floor {apartment.floor}
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">₹{apartment.rent.toLocaleString()}</p>
            <p className="text-sm text-gray-500">per month</p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1 text-sm font-medium">{apartment.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({apartment.reviews} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div>Size: {apartment.size} sq ft</div>
          <div>{apartment.bedrooms} BHK</div>
          <div>{apartment.bathrooms} Bathrooms</div>
          <div>{apartment.balconies} Balcony</div>
        </div>

        <div className="mb-4">
          <span className={`inline-block px-2 py-1 rounded-full text-xs ${
            apartment.furnishing === 'Furnished' 
              ? 'bg-blue-100 text-blue-800'
              : apartment.furnishing === 'Semi-furnished'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {apartment.furnishing}
          </span>
        </div>

        <div className="flex space-x-2">
          <button 
            onClick={() => onAddToCart(apartment.id)}
            disabled={!apartment.available}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${
              apartment.available
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={16} className="inline mr-2" />
            {apartment.available ? 'Add to Cart' : 'Not Available'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
