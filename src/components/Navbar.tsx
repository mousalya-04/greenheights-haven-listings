
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User, Building2, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // Load counts from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedCart = localStorage.getItem('cart');
    
    if (savedFavorites) {
      setFavoritesCount(JSON.parse(savedFavorites).length);
    }
    if (savedCart) {
      setCartCount(JSON.parse(savedCart).length);
    }

    // Listen for storage changes
    const handleStorageChange = () => {
      const favorites = localStorage.getItem('favorites');
      const cart = localStorage.getItem('cart');
      
      setFavoritesCount(favorites ? JSON.parse(favorites).length : 0);
      setCartCount(cart ? JSON.parse(cart).length : 0);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events when items are added/removed
    window.addEventListener('favoritesUpdated', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('favoritesUpdated', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/apartments?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black professional-shadow-lg border-b border-pink-600/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 rounded-xl flex items-center justify-center professional-shadow transform group-hover:scale-110 transition-all duration-300">
                <Building2 className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-md">
                <Sparkles className="text-white w-full h-full p-0.5" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold gradient-text">
                MR Residencies
              </h1>
              <p className="text-xs text-pink-300 font-poppins font-medium tracking-wide">Professional Living</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search premium apartments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-0 bg-gray-900/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-600 focus:outline-none backdrop-blur-sm glass-effect font-poppins"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/home" 
              className={`text-sm font-poppins font-medium transition-all duration-300 ${
                isActive('/home') ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apartments" 
              className={`text-sm font-poppins font-medium transition-all duration-300 ${
                isActive('/apartments') ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'
              }`}
            >
              Apartments
            </Link>
            <Link 
              to="/facilities" 
              className={`text-sm font-poppins font-medium transition-all duration-300 ${
                isActive('/facilities') ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'
              }`}
            >
              Facilities
            </Link>
            <Link 
              to="/reviews" 
              className={`text-sm font-poppins font-medium transition-all duration-300 ${
                isActive('/reviews') ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'
              }`}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-poppins font-medium transition-all duration-300 ${
                isActive('/contact') ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/favorites" 
              className="p-3 text-gray-300 hover:text-pink-400 transition-all duration-300 relative transform hover:scale-110"
            >
              <Heart size={20} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center professional-glow">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart" 
              className="p-3 text-gray-300 hover:text-pink-400 transition-all duration-300 relative transform hover:scale-110"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center professional-glow">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 professional-shadow transform hover:scale-105"
            >
              <User size={18} />
              <span className="text-sm font-poppins font-medium">Login</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-3 text-gray-300 hover:text-pink-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search premium apartments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border-0 bg-gray-900/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-600 focus:outline-none backdrop-blur-sm glass-effect font-poppins"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-pink-600/20 glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/home" 
                className="block px-4 py-3 text-sm font-poppins font-medium text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/apartments" 
                className="block px-4 py-3 text-sm font-poppins font-medium text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Apartments
              </Link>
              <Link 
                to="/facilities" 
                className="block px-4 py-3 text-sm font-poppins font-medium text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/reviews" 
                className="block px-4 py-3 text-sm font-poppins font-medium text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-sm font-poppins font-medium text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
