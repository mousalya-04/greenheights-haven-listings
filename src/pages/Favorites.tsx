
import React, { useState } from 'react';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import ApartmentCard from '../components/ApartmentCard';
import { apartments } from '../data/apartments';

const Favorites = () => {
  // Mock favorites data - in real app this would come from state/localStorage
  const [favorites, setFavorites] = useState<string[]>(['a101', 'b102', 'c201']);
  const [cart, setCart] = useState<string[]>([]);

  const favoriteApartments = apartments.filter(apt => favorites.includes(apt.id));

  const handleRemoveFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav !== id));
  };

  const handleAddToCart = (id: string) => {
    setCart(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleClearAllFavorites = () => {
    if (window.confirm('Are you sure you want to remove all apartments from favorites?')) {
      setFavorites([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Favorites
            </h1>
            <p className="text-lg text-gray-600">
              {favoriteApartments.length} apartment{favoriteApartments.length !== 1 ? 's' : ''} saved to your favorites
            </p>
          </div>
          {favoriteApartments.length > 0 && (
            <button
              onClick={handleClearAllFavorites}
              className="flex items-center px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={20} className="mr-2" />
              Clear All
            </button>
          )}
        </div>

        {/* Favorites Grid */}
        {favoriteApartments.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteApartments.map(apartment => (
                <div key={apartment.id} className="relative">
                  <ApartmentCard
                    apartment={apartment}
                    onAddToFavorites={() => {}} // Not used in favorites page
                    onAddToCart={handleAddToCart}
                    isFavorited={true}
                    isInCart={cart.includes(apartment.id)}
                  />
                  {/* Remove from favorites button overlay */}
                  <button
                    onClick={() => handleRemoveFromFavorites(apartment.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors z-10"
                    title="Remove from favorites"
                  >
                    <Heart className="text-red-500 fill-current" size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Ready to move forward?
                  </h3>
                  <p className="text-gray-600">
                    Add apartments to your cart to start the application process
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="/apartments"
                    className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Browse More
                  </a>
                  <a
                    href="/cart"
                    className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    View Cart ({cart.length})
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-gray-400" size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start browsing our apartments and save your favorites by clicking the heart icon. 
              This will help you compare and decide on your perfect home.
            </p>
            <a
              href="/apartments"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Apartments
            </a>
          </div>
        )}

        {/* Comparison Feature Hint */}
        {favoriteApartments.length >= 2 && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">💡</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Compare Your Favorites
                </h4>
                <p className="text-blue-700">
                  You have multiple apartments in your favorites. Consider comparing their features, 
                  rent, and amenities to make the best choice for your needs.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
