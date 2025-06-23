
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, MapPin, Home, Car, Wifi } from 'lucide-react';
import { apartments } from '../data/apartments';

const ApartmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = apartments.find(apt => apt.id === id);
  const [selectedImage, setSelectedImage] = useState('main');

  if (!apartment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Apartment Not Found</h1>
          <Link to="/apartments" className="text-blue-600 hover:underline">Return to Apartments</Link>
        </div>
      </div>
    );
  }

  const imageOptions = [
    { key: 'main', label: 'Main View' },
    { key: 'livingRoom', label: 'Living Room' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'bedroom', label: 'Bedroom' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: 'balcony', label: 'Balcony' },
    ...(apartment.images.dining ? [{ key: 'dining', label: 'Dining' }] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/apartments" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Apartments
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Apartment {apartment.block}-{apartment.number}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                Block {apartment.block}, Floor {apartment.floor}
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 fill-current mr-1" size={20} />
                <span className="font-medium">{apartment.rating}</span>
                <span className="text-gray-500 ml-1">({apartment.reviews} reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹{apartment.rent.toLocaleString()}/month
              </div>
              <div className="text-gray-500">
                ₹{(apartment.rent * 12).toLocaleString()}/year
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Room Gallery */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Room Gallery</h2>
            <div className="mb-4">
              <img 
                src={apartment.images[selectedImage as keyof typeof apartment.images]} 
                alt={`${selectedImage} - Apartment ${apartment.block}-${apartment.number}`}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {imageOptions.map(option => (
                <button
                  key={option.key}
                  onClick={() => setSelectedImage(option.key)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    selectedImage === option.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Rooms:</span>
                  <span className="font-medium">{apartment.bedrooms + apartment.bathrooms + 2} rooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-medium">{apartment.bedrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-medium">{apartment.bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Living Room:</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kitchen:</span>
                  <span className="font-medium">1</span>
                </div>
                {apartment.images.dining && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dining Area:</span>
                    <span className="font-medium">1</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Balconies:</span>
                  <span className="font-medium">{apartment.balconies}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Apartment Details</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Home className="text-gray-500 mr-2" size={20} />
                  <div>
                    <div className="font-medium">{apartment.type}</div>
                    <div className="text-sm text-gray-500">{apartment.size} sq ft</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">{apartment.bedrooms} Bedrooms</div>
                  <div className="text-sm text-gray-500">{apartment.bathrooms} Bathrooms</div>
                </div>
                <div>
                  <div className="font-medium">{apartment.balconies} Balcony</div>
                  <div className="text-sm text-gray-500">Floor {apartment.floor}</div>
                </div>
                <div>
                  <div className="font-medium">{apartment.furnishing}</div>
                  <div className={`text-sm ${apartment.available ? 'text-green-600' : 'text-red-600'}`}>
                    {apartment.available ? 'Available' : 'Occupied'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{apartment.description}</p>
              </div>

              {/* Unique Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Unique Features</h3>
                <div className="flex flex-wrap gap-2">
                  {apartment.uniqueFeatures.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {apartment.amenities.map((amenity, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accessibility */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Accessibility</h3>
                <div className="flex flex-wrap gap-2">
                  {apartment.accessibility.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Heart size={20} className="mr-2" />
                  Add to Favorites
                </button>
                <button 
                  disabled={!apartment.available}
                  className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                    apartment.available
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  {apartment.available ? 'Add to Cart' : 'Not Available'}
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Interested in this apartment?</h3>
              <div className="space-y-3">
                <Link 
                  to="/schedule-visit"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Schedule a Visit
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Contact Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;

