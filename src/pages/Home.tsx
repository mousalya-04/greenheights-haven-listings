import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Home as HomeIcon, Calendar, Shield, TreePine } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 left-40 w-24 h-24 bg-green-400 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-2xl mb-6 animate-pulse">
              <span className="text-white font-bold text-3xl">MR</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            MR Residencies
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100">
            Experience luxury living in our premium apartment community with world-class amenities 
            and modern lifestyle in the heart of Coimbatore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apartments" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              🏠 Explore Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              📅 Schedule Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <HomeIcon className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Premium Apartments</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <Users className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Happy Residents</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <Star className="mx-auto text-yellow-500 mb-4 fill-current" size={48} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">4.9</h3>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <MapPin className="mx-auto text-red-500 mb-4" size={48} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">5</h3>
              <p className="text-gray-600 font-medium">Modern Blocks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Premium Blocks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our five modern blocks, each designed with unique features and amenities 
              to suit your lifestyle preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Block A - Garden Paradise */}
            <Link to="/block/A" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop" 
                    alt="Garden Paradise Block A"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <p className="text-white font-semibold">🌿 Garden Paradise</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                    Block A - Garden Paradise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful apartments with rooftop gardens, organic farming areas, and serene green views throughout.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Rooftop Garden</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Organic Farm</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block B - Fitness Hub */}
            <Link to="/block/B" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop" 
                    alt="Fitness Hub Block B"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">B</span>
                    </div>
                    <p className="text-white font-semibold">💪 Fitness Hub</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    Block B - Fitness Hub
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay fit and healthy with our state-of-the-art fitness center, yoga studio, and wellness facilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Modern Gym</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Yoga Studio</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block C - Family Zone */}
            <Link to="/block/C" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop" 
                    alt="Family Zone Block C"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <p className="text-white font-semibold">👨‍👩‍👧‍👦 Family Zone</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    Block C - Family Zone
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for families with dedicated play areas, family lounges, and child-friendly amenities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Kids Playground</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Family Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block D - Community Hub */}
            <Link to="/block/D" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop" 
                    alt="Community Hub Block D"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">D</span>
                    </div>
                    <p className="text-white font-semibold">🎉 Community Hub</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    Block D - Community Hub
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect with neighbors in our vibrant community spaces, event halls, and social gathering areas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Event Hall</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Social Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block E - Rooftop Retreat */}
            <Link to="/block/E" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop" 
                    alt="Rooftop Retreat Block E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <p className="text-white font-semibold">🌇 Rooftop Retreat</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    Block E - Rooftop Retreat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience luxury living with our exclusive rooftop lounges, sky dining areas, and panoramic city views.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Sky Dining</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">City Views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Why Choose MR Residencies?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Peaceful Environment</h3>
              <p className="text-gray-600">Enjoy tranquil living surrounded by nature and greenery in our garden paradise.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Family-Friendly & Safe</h3>
              <p className="text-gray-600">24/7 security with CCTV surveillance and child-friendly spaces for families.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600">Premium Amenities</h3>
              <p className="text-gray-600">World-class facilities including gym, rooftop dining, and community spaces.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-600">Great Connectivity</h3>
              <p className="text-gray-600">Excellent public transport access and proximity to essentials.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-600">Dedicated Parking</h3>
              <p className="text-gray-600">Every apartment comes with dedicated parking space.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Community Events</h3>
              <p className="text-gray-600">Monthly celebrations and events to build community bonds.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Healthcare Access</h3>
              <p className="text-gray-600">Top-rated hospitals and schools within walking distance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Call MR Residencies Home?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our premium community and experience luxury living at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apartments" 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            >
              View All Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105"
            >
              Schedule Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
