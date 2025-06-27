import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Home as HomeIcon, Calendar, Shield, TreePine, Sparkles, Award, CheckCircle, Crown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-70"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-20 h-20 bg-gray-700 rounded-full opacity-15 animate-bounce delay-500"></div>
          <div className="absolute top-60 left-1/3 w-8 h-8 bg-pink-600 rounded-full opacity-30 animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-40 w-14 h-14 bg-gray-600 rounded-full opacity-20 animate-bounce delay-1500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-full shadow-2xl mb-4 animate-pulse-pink">
              <Crown className="text-white" size={40} />
            </div>
            <div className="flex justify-center mb-3">
              <Sparkles className="text-pink-300 animate-pulse" size={24} />
              <Sparkles className="text-pink-400 animate-pulse delay-500 mx-2" size={20} />
              <Sparkles className="text-pink-500 animate-pulse delay-1000" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 gradient-text animate-fade-in neon-pink">
            MR Residencies
          </h1>
          <p className="text-lg md:text-xl mb-3 text-pink-200 font-poppins font-semibold">
            👑 Premium Luxury Living Experience 👑
          </p>
          <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto text-gray-300 font-inter">
            Experience unparalleled luxury in our premium apartment community with world-class amenities, 
            beautiful gardens, and modern lifestyle in the heart of Coimbatore. ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              to="/apartments" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-poppins font-bold transition-all transform hover:scale-110 shadow-2xl border border-pink-400"
            >
              🏠 Explore Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-2xl text-lg font-poppins font-bold transition-all transform hover:scale-110 shadow-2xl border border-gray-500"
            >
              📅 Schedule Visit
            </Link>
            <Link 
              to="/facilities" 
              className="bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-2xl text-lg font-poppins font-bold transition-all transform hover:scale-110 shadow-2xl border border-pink-500"
            >
              🎯 View Facilities
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center glass-effect px-4 py-2 rounded-full border border-pink-500/30">
              <Award className="text-pink-400 mr-2" size={18} />
              <span className="font-poppins">Award Winning</span>
            </div>
            <div className="flex items-center glass-effect px-4 py-2 rounded-full border border-pink-500/30">
              <Shield className="text-pink-400 mr-2" size={18} />
              <span className="font-poppins">100% Safe</span>
            </div>
            <div className="flex items-center glass-effect px-4 py-2 rounded-full border border-pink-500/30">
              <CheckCircle className="text-pink-400 mr-2" size={18} />
              <span className="font-poppins">Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-3 neon-pink">
              ✨ Why Choose MR Residencies? ✨
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card-glass p-6 rounded-3xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <HomeIcon className="mx-auto text-pink-400 mb-3 animate-bounce" size={40} />
              <h3 className="text-2xl md:text-3xl font-playfair font-bold gradient-text mb-2">50+</h3>
              <p className="text-gray-300 font-poppins font-semibold text-sm md:text-base">Premium Apartments</p>
              <p className="text-xs text-pink-300 mt-1">🏠 Luxury Spaces</p>
            </div>
            
            <div className="card-glass p-6 rounded-3xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <Users className="mx-auto text-pink-400 mb-3 animate-bounce delay-300" size={40} />
              <h3 className="text-2xl md:text-3xl font-playfair font-bold gradient-text mb-2">500+</h3>
              <p className="text-gray-300 font-poppins font-semibold text-sm md:text-base">Happy Residents</p>
              <p className="text-xs text-pink-300 mt-1">👨‍👩‍👧‍👦 Community</p>
            </div>
            
            <div className="card-glass p-6 rounded-3xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <Star className="mx-auto text-pink-400 mb-3 fill-current animate-bounce delay-500" size={40} />
              <h3 className="text-2xl md:text-3xl font-playfair font-bold gradient-text mb-2">4.9</h3>
              <p className="text-gray-300 font-poppins font-semibold text-sm md:text-base">Average Rating</p>
              <p className="text-xs text-pink-300 mt-1">⭐ Excellence</p>
            </div>
            
            <div className="card-glass p-6 rounded-3xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <MapPin className="mx-auto text-pink-400 mb-3 animate-bounce delay-700" size={40} />
              <h3 className="text-2xl md:text-3xl font-playfair font-bold gradient-text mb-2">5</h3>
              <p className="text-gray-300 font-poppins font-semibold text-sm md:text-base">Modern Blocks</p>
              <p className="text-xs text-pink-300 mt-1">🏢 Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks Overview */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold gradient-text mb-4 neon-pink">
              🏰 Our Premium Blocks 🏰
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-inter">
              Choose from our five modern blocks, each designed with unique features and luxury amenities. ✨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Block A - Garden Paradise */}
            <Link to="/block/A" className="group">
              <div className="card-modern overflow-hidden hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop" 
                    alt="Garden Paradise Block A"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-white font-playfair font-bold text-lg">A</span>
                    </div>
                    <p className="text-white font-poppins font-bold text-lg">🌿 Garden Paradise</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-poppins font-bold">
                      🌱 Eco-Friendly
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-pink-400 transition-colors text-white">
                    Block A - Garden Paradise 🌺
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-inter">
                    Beautiful apartments with rooftop gardens and organic farming areas. Perfect for nature lovers! 🌳
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🌿 Rooftop Garden</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🥕 Organic Farm</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block B - Fitness Hub */}
            <Link to="/block/B" className="group">
              <div className="card-modern overflow-hidden hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop" 
                    alt="Fitness Hub Block B"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-white font-playfair font-bold text-lg">B</span>
                    </div>
                    <p className="text-white font-poppins font-bold text-lg">💪 Fitness Hub</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-poppins font-bold">
                      🏋️ Fitness First
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-pink-400 transition-colors text-white">
                    Block B - Fitness Hub 💪
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-inter">
                    Stay fit and healthy with our state-of-the-art fitness center, yoga studio, and wellness facilities. Health is wealth! 🧘‍♀️
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🏋️ Modern Gym</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🧘 Yoga Studio</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block C - Family Zone */}
            <Link to="/block/C" className="group">
              <div className="card-modern overflow-hidden hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop" 
                    alt="Family Zone Block C"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-white font-playfair font-bold text-lg">C</span>
                    </div>
                    <p className="text-white font-poppins font-bold text-lg">👨‍👩‍👧‍👦 Family Zone</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-poppins font-bold">
                      👶 Kid-Friendly
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-pink-400 transition-colors text-white">
                    Block C - Family Zone 👨‍👩‍👧‍👦
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-inter">
                    Perfect for families with dedicated play areas, family lounges, and child-friendly amenities. Create beautiful memories! 🎈
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🎪 Kids Playground</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🏠 Family Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block D - Community Hub */}
            <Link to="/block/D" className="group">
              <div className="card-modern overflow-hidden hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop" 
                    alt="Community Hub Block D"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-white font-playfair font-bold text-lg">D</span>
                    </div>
                    <p className="text-white font-poppins font-bold text-lg">🎉 Community Hub</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-poppins font-bold">
                      🎊 Social Life
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-pink-400 transition-colors text-white">
                    Block D - Community Hub 🎉
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-inter">
                    Connect with neighbors in our vibrant community spaces, event halls, and social gathering areas. Build lasting friendships! 🤝
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🎭 Event Hall</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">☕ Social Lounge</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Block E - Rooftop Retreat */}
            <Link to="/block/E" className="group">
              <div className="card-modern overflow-hidden hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop" 
                    alt="Rooftop Retreat Block E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-white font-playfair font-bold text-lg">E</span>
                    </div>
                    <p className="text-white font-poppins font-bold text-lg">🌇 Rooftop Retreat</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-poppins font-bold">
                      ⭐ Luxury Elite
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-pink-400 transition-colors text-white">
                    Block E - Rooftop Retreat 🌇
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-inter">
                    Experience luxury living with our exclusive rooftop lounges, sky dining areas, and panoramic city views. Live like royalty! 👑
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🍽️ Sky Dining</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-pink-300 rounded-full text-xs font-poppins font-semibold">🌆 City Views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4 neon-pink">
              🌟 Why Choose Us? 🌟
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-inter">
              Experience the difference with our premium amenities! 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <TreePine className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Peaceful Environment</h3>
              <p className="text-gray-400 text-sm font-inter">Tranquil living surrounded by nature and greenery.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Safe & Secure</h3>
              <p className="text-gray-400 text-sm font-inter">24/7 security with CCTV surveillance.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Premium Amenities</h3>
              <p className="text-gray-400 text-sm font-inter">World-class facilities and community spaces.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Great Connectivity</h3>
              <p className="text-gray-400 text-sm font-inter">Excellent public transport access and proximity to essentials.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Dedicated Parking</h3>
              <p className="text-gray-400 text-sm font-inter">Every apartment comes with dedicated parking space.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Community Events</h3>
              <p className="text-gray-400 text-sm font-inter">Monthly celebrations and events to build community bonds.</p>
            </div>

            <div className="text-center card-glass p-6 rounded-3xl hover:shadow-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-playfair font-bold mb-2 text-white">Healthcare Access</h3>
              <p className="text-gray-400 text-sm font-inter">Top-rated hospitals and schools within walking distance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">🏡 Ready to Call MR Residencies Home? 🏡</h2>
          <p className="text-lg text-gray-300 mb-8 font-inter">
            Join our premium community and experience luxury living! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apartments" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-poppins font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              🏠 View Apartments
            </Link>
            <Link 
              to="/schedule-visit" 
              className="border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-2xl font-poppins font-bold text-lg hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105"
            >
              📅 Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
