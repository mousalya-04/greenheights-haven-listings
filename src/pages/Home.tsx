import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Home as HomeIcon, Calendar, Shield, TreePine, Sparkles, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-24 h-24 bg-green-400 rounded-full opacity-15 animate-bounce delay-500"></div>
          <div className="absolute top-60 left-1/3 w-12 h-12 bg-pink-400 rounded-full opacity-30 animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-40 w-18 h-18 bg-purple-400 rounded-full opacity-20 animate-bounce delay-1500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full shadow-2xl mb-6 animate-pulse">
              <span className="text-white font-bold text-5xl">MR</span>
            </div>
            <div className="flex justify-center mb-4">
              <Sparkles className="text-yellow-300 animate-pulse" size={32} />
              <Sparkles className="text-pink-300 animate-pulse delay-500 mx-2" size={28} />
              <Sparkles className="text-blue-300 animate-pulse delay-1000" size={32} />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            MR Residencies
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-yellow-100 font-semibold">
            🏠 Premium Living Experience 🏠
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90">
            Experience luxury living in our premium apartment community with world-class amenities, 
            beautiful gardens, and modern lifestyle in the heart of Coimbatore. Your dream home awaits! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link 
              to="/apartments" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-110 shadow-2xl border-2 border-white/20"
            >
              🏠 Explore Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-110 shadow-2xl border-2 border-white/20"
            >
              📅 Schedule Visit
            </Link>
            <Link 
              to="/facilities" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-110 shadow-2xl border-2 border-white/20"
            >
              🎯 View Facilities
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="text-yellow-300 mr-2" size={24} />
              <span>Award Winning</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Shield className="text-green-300 mr-2" size={24} />
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <CheckCircle className="text-blue-300 mr-2" size={24} />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              ✨ Why Thousands Choose MR Residencies ✨
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-gradient-to-r from-blue-200 to-purple-200">
              <HomeIcon className="mx-auto text-blue-600 mb-4 animate-bounce" size={56} />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</h3>
              <p className="text-gray-600 font-bold text-lg">Premium Apartments</p>
              <p className="text-sm text-gray-500 mt-1">🏠 Luxury Living Spaces</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-gradient-to-r from-green-200 to-teal-200">
              <Users className="mx-auto text-green-600 mb-4 animate-bounce delay-300" size={56} />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">500+</h3>
              <p className="text-gray-600 font-bold text-lg">Happy Residents</p>
              <p className="text-sm text-gray-500 mt-1">👨‍👩‍👧‍👦 Growing Community</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-gradient-to-r from-yellow-200 to-orange-200">
              <Star className="mx-auto text-yellow-500 mb-4 fill-current animate-bounce delay-500" size={56} />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">4.9</h3>
              <p className="text-gray-600 font-bold text-lg">Average Rating</p>
              <p className="text-sm text-gray-500 mt-1">⭐ Excellent Reviews</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-gradient-to-r from-red-200 to-pink-200">
              <MapPin className="mx-auto text-red-500 mb-4 animate-bounce delay-700" size={56} />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">5</h3>
              <p className="text-gray-600 font-bold text-lg">Modern Blocks</p>
              <p className="text-sm text-gray-500 mt-1">🏢 Architectural Marvel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              🏰 Our Premium Blocks 🏰
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Choose from our five modern blocks, each designed with unique features and amenities 
              to suit your lifestyle preferences. Every block offers something special! ✨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Block A - Garden Paradise */}
            <Link to="/block/A" className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-green-100">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop" 
                    alt="Garden Paradise Block A"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <p className="text-white font-bold text-xl">🌿 Garden Paradise</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🌱 Eco-Friendly
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    Block A - Garden Paradise 🌺
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Beautiful apartments with rooftop gardens, organic farming areas, and serene green views throughout. Perfect for nature lovers! 🌳
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🌿 Rooftop Garden</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🥕 Organic Farm</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block B - Fitness Hub */}
            <Link to="/block/B" className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-blue-100">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop" 
                    alt="Fitness Hub Block B"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white font-bold text-2xl">B</span>
                    </div>
                    <p className="text-white font-bold text-xl">💪 Fitness Hub</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🏋️ Fitness First
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    Block B - Fitness Hub 💪
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Stay fit and healthy with our state-of-the-art fitness center, yoga studio, and wellness facilities. Health is wealth! 🧘‍♀️
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">🏋️ Modern Gym</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">🧘 Yoga Studio</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block C - Family Zone */}
            <Link to="/block/C" className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-purple-100">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop" 
                    alt="Family Zone Block C"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white font-bold text-2xl">C</span>
                    </div>
                    <p className="text-white font-bold text-xl">👨‍👩‍👧‍👦 Family Zone</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      👶 Kid-Friendly
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    Block C - Family Zone 👨‍👩‍👧‍👦
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Perfect for families with dedicated play areas, family lounges, and child-friendly amenities. Create beautiful memories! 🎈
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">🎪 Kids Playground</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">🏠 Family Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block D - Community Hub */}
            <Link to="/block/D" className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-orange-100">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop" 
                    alt="Community Hub Block D"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white font-bold text-2xl">D</span>
                    </div>
                    <p className="text-white font-bold text-xl">🎉 Community Hub</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🎊 Social Life
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Block D - Community Hub 🎉
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Connect with neighbors in our vibrant community spaces, event halls, and social gathering areas. Build lasting friendships! 🤝
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">🎭 Event Hall</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">☕ Social Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block E - Rooftop Retreat */}
            <Link to="/block/E" className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-red-100">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop" 
                    alt="Rooftop Retreat Block E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white font-bold text-2xl">E</span>
                    </div>
                    <p className="text-white font-bold text-xl">🌇 Rooftop Retreat</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Luxury Elite
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                    Block E - Rooftop Retreat 🌇
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Experience luxury living with our exclusive rooftop lounges, sky dining areas, and panoramic city views. Live like royalty! 👑
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">🍽️ Sky Dining</span>
                    <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">🌆 City Views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              🌟 Why Choose MR Residencies? 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium amenities and world-class services! 
            </p>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🏡 Ready to Call MR Residencies Home? 🏡</h2>
          <p className="text-2xl text-white/90 mb-10">
            Join our premium community and experience luxury living at its finest. Your dream home is waiting! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/apartments" 
              className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl"
            >
              🏠 View All Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="border-4 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105"
            >
              📅 Schedule Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
