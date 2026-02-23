import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User, Building2, Sparkles, LogOut, CalendarDays, UserCircle, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/apartments?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
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
              <h1 className="text-xl font-playfair font-bold gradient-text">MR Residencies</h1>
              <p className="text-xs text-pink-300 font-poppins font-medium tracking-wide">Professional Living</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input type="text" placeholder="Search premium apartments..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-0 bg-gray-900/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-600 focus:outline-none backdrop-blur-sm glass-effect font-poppins" />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { path: '/home', label: 'Home' },
              { path: '/apartments', label: 'Apartments' },
              { path: '/facilities', label: 'Facilities' },
              { path: '/reviews', label: 'Reviews' },
              { path: '/contact', label: 'Contact' },
            ].map(item => (
              <Link key={item.path} to={item.path}
                className={`text-sm font-poppins font-medium transition-all duration-300 ${isActive(item.path) ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300 hover:text-pink-300'}`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Link to="/favorites" className="p-2 text-gray-300 hover:text-pink-400 transition-all relative">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="p-2 text-gray-300 hover:text-pink-400 transition-all relative">
              <ShoppingCart size={20} />
            </Link>

            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/bookings" className="p-2 text-gray-300 hover:text-pink-400 transition-all" title="My Bookings">
                  <CalendarDays size={20} />
                </Link>
                <Link to="/profile" className="p-2 text-gray-300 hover:text-pink-400 transition-all" title="Profile">
                  <UserCircle size={20} />
                </Link>
                <button onClick={handleSignOut} className="p-2 text-gray-300 hover:text-red-400 transition-all" title="Sign Out">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/login"
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-5 py-2.5 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all professional-shadow">
                <User size={18} />
                <span className="text-sm font-poppins font-medium">Login</span>
              </Link>
            )}

            <button className="md:hidden p-3 text-gray-300 hover:text-pink-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-pink-600/20 glass-effect pb-4">
            <div className="px-2 pt-2 space-y-1">
              {['/home', '/apartments', '/facilities', '/reviews', '/contact'].map(path => (
                <Link key={path} to={path} onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-poppins text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg">
                  {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
              {user && (
                <>
                  <Link to="/bookings" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-poppins text-gray-300 hover:text-pink-400 rounded-lg">My Bookings</Link>
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-poppins text-gray-300 hover:text-pink-400 rounded-lg">Profile</Link>
                  <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-sm font-poppins text-red-400 hover:bg-red-500/10 rounded-lg">Sign Out</button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
