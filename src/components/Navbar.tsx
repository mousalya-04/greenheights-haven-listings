
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GreenHeights</h1>
              <p className="text-xs text-emerald-600">Residency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apartments" 
              className={`text-sm font-medium transition-colors ${
                isActive('/apartments') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Apartments
            </Link>
            <Link 
              to="/facilities" 
              className={`text-sm font-medium transition-colors ${
                isActive('/facilities') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Facilities
            </Link>
            <Link 
              to="/reviews" 
              className={`text-sm font-medium transition-colors ${
                isActive('/reviews') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Search size={20} />
            </button>
            <Link 
              to="/favorites" 
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
            >
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link 
              to="/cart" 
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
            >
              <User size={18} />
              <span className="text-sm font-medium">Login</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/apartments" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Apartments
              </Link>
              <Link 
                to="/facilities" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/reviews" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="block px-3 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
