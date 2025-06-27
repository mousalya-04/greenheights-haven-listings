
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User, Building2 } from 'lucide-react';

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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 shadow-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-400 via-gray-300 to-slate-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <Building2 className="text-gray-900" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-md"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                MR Residencies
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">Luxury Living Redefined</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search apartments, blocks, facilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-xl border-0 bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:outline-none backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/home" 
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/home') ? 'text-slate-200 border-b-2 border-slate-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apartments" 
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/apartments') ? 'text-slate-200 border-b-2 border-slate-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              Apartments
            </Link>
            <Link 
              to="/facilities" 
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/facilities') ? 'text-slate-200 border-b-2 border-slate-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              Facilities
            </Link>
            <Link 
              to="/reviews" 
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/reviews') ? 'text-slate-200 border-b-2 border-slate-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/contact') ? 'text-slate-200 border-b-2 border-slate-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/favorites" 
              className="p-2 text-gray-300 hover:text-white transition-colors relative"
            >
              <Heart size={20} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart" 
              className="p-2 text-gray-300 hover:text-white transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 bg-gradient-to-r from-slate-600 to-gray-700 text-white px-4 py-2 rounded-xl hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
            >
              <User size={18} />
              <span className="text-sm font-medium">Login</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search apartments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-xl border-0 bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:outline-none backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-800/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/home" 
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/apartments" 
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Apartments
              </Link>
              <Link 
                to="/facilities" 
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/reviews" 
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
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
