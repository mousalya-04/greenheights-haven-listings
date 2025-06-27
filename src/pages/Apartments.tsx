import React, { useState, useMemo } from 'react';
import ApartmentCard from '../components/ApartmentCard';
import { apartments } from '../data/apartments';
import { Search, SlidersHorizontal } from 'lucide-react';

const Apartments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    minRent: '',
    maxRent: '',
    block: '',
    bedrooms: '',
    furnishing: '',
    floor: '',
    availability: 'all'
  });
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const filteredAndSortedApartments = useMemo(() => {
    let filtered = apartments.filter(apartment => {
      // Search term
      const matchesSearch = apartment.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           apartment.block.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Rent range
      const matchesMinRent = !filters.minRent || apartment.rent >= parseInt(filters.minRent);
      const matchesMaxRent = !filters.maxRent || apartment.rent <= parseInt(filters.maxRent);
      
      // Block
      const matchesBlock = !filters.block || apartment.block === filters.block;
      
      // Bedrooms
      const matchesBedrooms = !filters.bedrooms || apartment.bedrooms === parseInt(filters.bedrooms);
      
      // Furnishing
      const matchesFurnishing = !filters.furnishing || apartment.furnishing === filters.furnishing;
      
      // Floor
      const matchesFloor = !filters.floor || apartment.floor === parseInt(filters.floor);
      
      // Availability
      const matchesAvailability = filters.availability === 'all' || 
                                 (filters.availability === 'available' && apartment.available) ||
                                 (filters.availability === 'occupied' && !apartment.available);

      return matchesSearch && matchesMinRent && matchesMaxRent && matchesBlock && 
             matchesBedrooms && matchesFurnishing && matchesFloor && matchesAvailability;
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.rent - b.rent);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.rent - a.rent);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Keep original order for newest
        break;
    }

    return filtered;
  }, [searchTerm, filters, sortBy]);

  const handleAddToFavorites = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
    console.log('Favorites updated:', favorites.includes(id) ? 'Removed' : 'Added', id);
  };

  const handleAddToCart = (id: string) => {
    setCart(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
    console.log('Cart updated:', cart.includes(id) ? 'Removed' : 'Added', id);
  };

  const resetFilters = () => {
    setFilters({
      minRent: '',
      maxRent: '',
      block: '',
      bedrooms: '',
      furnishing: '',
      floor: '',
      availability: 'all'
    });
    setSearchTerm('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-4">
            Available Apartments at MR Residencies
          </h1>
          <p className="text-lg text-gray-300">
            Find your perfect home from our collection of premium apartments across 5 modern blocks.
          </p>
          
          {/* Counters */}
          <div className="flex space-x-6 mt-4 text-sm">
            <div className="bg-gray-800/50 text-slate-200 px-3 py-1 rounded-full border border-gray-700">
              ❤️ Favorites: {favorites.length}
            </div>
            <div className="bg-gray-700/50 text-slate-200 px-3 py-1 rounded-full border border-gray-600">
              🛒 Cart: {cart.length}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-6 mb-8 border border-gray-700">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search apartments by number or block..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-lg hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
            >
              <SlidersHorizontal size={20} className="mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Min Rent</label>
                <input
                  type="number"
                  placeholder="₹ 20,000"
                  value={filters.minRent}
                  onChange={(e) => setFilters(prev => ({ ...prev, minRent: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Max Rent</label>
                <input
                  type="number"
                  placeholder="₹ 40,000"
                  value={filters.maxRent}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxRent: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Block</label>
                <select
                  value={filters.block}
                  onChange={(e) => setFilters(prev => ({ ...prev, block: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">All Blocks</option>
                  <option value="A">Block A</option>
                  <option value="B">Block B</option>
                  <option value="C">Block C</option>
                  <option value="D">Block D</option>
                  <option value="E">Block E</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">Any</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Furnishing</label>
                <select
                  value={filters.furnishing}
                  onChange={(e) => setFilters(prev => ({ ...prev, furnishing: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">Any</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Semi-furnished">Semi-furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Floor</label>
                <select
                  value={filters.floor}
                  onChange={(e) => setFilters(prev => ({ ...prev, floor: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">Any Floor</option>
                  <option value="1">Ground Floor</option>
                  <option value="2">First Floor</option>
                  <option value="3">Second Floor</option>
                  <option value="4">Third Floor</option>
                  <option value="5">Fourth Floor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
                  className="w-full p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
                >
                  <option value="all">All</option>
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={resetFilters}
                  className="w-full py-2 px-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-lg hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Sort */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
              >
                <option value="newest">Newest Listings</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            <p className="text-sm text-gray-400">
              Showing {filteredAndSortedApartments.length} of {apartments.length} apartments
            </p>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedApartments.map(apartment => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              onAddToFavorites={handleAddToFavorites}
              onAddToCart={handleAddToCart}
              isFavorited={favorites.includes(apartment.id)}
              isInCart={cart.includes(apartment.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedApartments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-500" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No apartments found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters.</p>
            <button
              onClick={resetFilters}
              className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-6 py-2 rounded-lg hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apartments;
