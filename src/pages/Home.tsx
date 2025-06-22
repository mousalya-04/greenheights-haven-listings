
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Home as HomeIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-green-800 to-green-600 flex items-center">
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-green-300">GreenHeights</span> Residency
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Experience peaceful living in our modern apartment community with world-class amenities 
            and a family-friendly environment in the heart of Coimbatore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apartments" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Apartments
            </Link>
            <Link 
              to="/facilities" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HomeIcon className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Premium Apartments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Happy Residents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Modern Blocks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Apartment Blocks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our five modern blocks, each designed with unique features and amenities 
              to suit your lifestyle preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Block A */}
            <Link to="/block/A" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <p className="text-green-600 font-semibold">Rooftop Garden</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Block A - Garden View
                  </h3>
                  <p className="text-gray-600">
                    Beautiful apartments with rooftop garden access and serene green views.
                  </p>
                </div>
              </div>
            </Link>

            {/* Block B */}
            <Link to="/block/B" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-2xl">B</span>
                    </div>
                    <p className="text-blue-600 font-semibold">Premium Units</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Block B - Premium Living
                  </h3>
                  <p className="text-gray-600">
                    Luxurious apartments with premium fittings and spacious layouts.
                  </p>
                </div>
              </div>
            </Link>

            {/* Block C */}
            <Link to="/block/C" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-2xl">C</span>
                    </div>
                    <p className="text-purple-600 font-semibold">Fitness Center</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Block C - Fitness Hub
                  </h3>
                  <p className="text-gray-600">
                    Stay fit with modern gym facilities and wellness amenities.
                  </p>
                </div>
              </div>
            </Link>

            {/* Block D */}
            <Link to="/block/D" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-2xl">D</span>
                    </div>
                    <p className="text-orange-600 font-semibold">Family Zone</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Block D - Family Zone
                  </h3>
                  <p className="text-gray-600">
                    Perfect for families with dedicated play areas and family amenities.
                  </p>
                </div>
              </div>
            </Link>

            {/* Block E */}
            <Link to="/block/E" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-2xl">E</span>
                    </div>
                    <p className="text-red-600 font-semibold">Executive Suites</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Block E - Executive Living
                  </h3>
                  <p className="text-gray-600">
                    Premium executive apartments with enhanced privacy and luxury.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GreenHeights Residency?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Peaceful Environment</h3>
              <p className="text-gray-600">Enjoy tranquil living surrounded by nature and greenery.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Family-Friendly</h3>
              <p className="text-gray-600">Safe and secure environment perfect for families with children.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🚌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Connectivity</h3>
              <p className="text-gray-600">Excellent public transport access and proximity to essentials.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🅿️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Parking</h3>
              <p className="text-gray-600">Every apartment comes with dedicated parking space.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600">Monthly celebrations and events to build community bonds.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
              <p className="text-gray-600">Top-rated hospitals and schools within walking distance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
