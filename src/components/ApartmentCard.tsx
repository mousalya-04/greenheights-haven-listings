
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, MapPin, Users, Car, Wifi } from 'lucide-react';

export interface ApartmentCardProps {
  apartment: {
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
    features: string[];
    accessibility: string[];
    rating: number;
    furnishing: string;
    images: {
      main: string;
      kitchen: string;
      livingRoom: string;
      bathroom: string;
      balcony: string;
      bedroom: string;
      diningArea: string;
    };
  };
  onAddToFavorites: (id: string) => void;
  onAddToCart: (id: string) => void;
  isFavorited: boolean;
  isInCart: boolean;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ 
  apartment, 
  onAddToFavorites, 
  onAddToCart, 
  isFavorited, 
  isInCart 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={apartment.images.main}
          alt={`Apartment ${apartment.number}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            apartment.available 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {apartment.available ? 'Available' : 'Occupied'}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToFavorites(apartment.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              isFavorited 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(apartment.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              isInCart 
                ? 'bg-blue-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <ShoppingCart size={20} fill={isInCart ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Apartment {apartment.number}
            </h3>
            <p className="text-gray-600 flex items-center">
              <MapPin size={16} className="mr-1" />
              Block {apartment.block}, Floor {apartment.floor}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">
              ₹{apartment.rent.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">per month</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4 text-sm">{apartment.description}</p>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-blue-500" />
            {apartment.bedrooms} BR, {apartment.bathrooms} BA
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Car size={16} className="mr-2 text-green-500" />
            {apartment.sqft} sq ft
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              {feature}
            </span>
          ))}
          {apartment.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{apartment.features.length - 2} more
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(apartment.rating) ? "★" : "☆"}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({apartment.rating})</span>
          </div>
          <Link
            to={`/apartment/${apartment.id}`}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors font-semibold text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
