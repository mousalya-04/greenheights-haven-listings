
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Home, ArrowLeft } from 'lucide-react';
import { blockFeatures, apartments } from '../data/apartments';
import ApartmentCard from '../components/ApartmentCard';

const BlockDetails = () => {
  const { blockId } = useParams<{ blockId: string }>();
  const block = blockId ? blockFeatures[blockId as keyof typeof blockFeatures] : null;
  const blockApartments = apartments.filter(apt => apt.block === blockId);

  if (!block || !blockId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Block Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${block.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{block.name}</h1>
              <p className="text-xl mb-6 text-white/90">{block.description}</p>
              <div className="flex flex-wrap gap-3">
                {block.amenities.map((amenity, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src={block.image} 
                alt={block.name}
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Home className="mx-auto text-gray-600 mb-2" size={32} />
              <div className="text-2xl font-bold text-gray-900">{blockApartments.length}</div>
              <div className="text-gray-600">Total Units</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {blockApartments.filter(apt => apt.available).length}
              </div>
              <div className="text-gray-600">Available</div>
            </div>
            <div>
              <Star className="mx-auto text-yellow-500 mb-2 fill-current" size={32} />
              <div className="text-2xl font-bold text-gray-900">
                {blockApartments.length > 0 
                  ? (blockApartments.reduce((sum, apt) => sum + apt.rating, 0) / blockApartments.length).toFixed(1)
                  : '0'
                }
              </div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
            <div>
              <MapPin className="mx-auto text-red-500 mb-2" size={32} />
              <div className="text-2xl font-bold text-gray-900">Premium</div>
              <div className="text-gray-600">Location</div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Apartments */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Apartments in {block.name}
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our selection of premium apartments
            </p>
          </div>

          {blockApartments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockApartments.map(apartment => (
                <ApartmentCard
                  key={apartment.id}
                  apartment={apartment}
                  onAddToFavorites={() => {}}
                  onAddToCart={() => {}}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">No apartments available in this block</div>
              <Link 
                to="/apartments" 
                className="text-blue-600 hover:underline"
              >
                View all apartments
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockDetails;
