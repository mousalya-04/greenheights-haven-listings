
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/apartments?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">MR Residencies</h1>
              <p className="text-xs text-yellow-200">Premium Living</p>
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
                className="w-full px-4 py-2 pl-10 rounded-full border-0 bg-white/90 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apartments" 
              className={`text-sm font-medium transition-colors ${
                isActive('/apartments') ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Apartments
            </Link>
            <Link 
              to="/facilities" 
              className={`text-sm font-medium transition-colors ${
                isActive('/facilities') ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Facilities
            </Link>
            <Link 
              to="/reviews" 
              className={`text-sm font-medium transition-colors ${
                isActive('/reviews') ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/favorites" 
              className="p-2 text-white hover:text-yellow-200 transition-colors relative"
            >
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link 
              to="/cart" 
              className="p-2 text-white hover:text-yellow-200 transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all"
            >
              <User size={18} />
              <span className="text-sm font-medium">Login</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-white"
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
              className="w-full px-4 py-2 pl-10 rounded-full border-0 bg-white/90 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/apartments" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Apartments
              </Link>
              <Link 
                to="/facilities" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/reviews" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-200"
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
