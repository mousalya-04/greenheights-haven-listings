import React, { useState } from 'react';
import { Star, User, Filter, TrendingUp, Award, MessageCircle } from 'lucide-react';

const Reviews = () => {
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      apartment: 'A-101',
      block: 'A',
      rating: 5,
      date: '2024-01-15',
      review: 'Absolutely love living here! The rooftop garden in Block A is amazing, and the maintenance team is very responsive. Great community feeling.',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      apartment: 'B-102',
      block: 'B',
      rating: 4,
      date: '2024-01-10',
      review: 'Premium apartments with excellent finishing. The gym facilities are top-notch. Only minor issue is parking can get crowded during peak hours.',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Anitha Menon',
      apartment: 'C-201',
      block: 'C',
      rating: 5,
      date: '2024-01-08',
      review: 'Perfect for fitness enthusiasts! The gym is well-equipped and the jogging track is great for morning runs. Very family-friendly environment.',
      verified: true
    },
    {
      id: 4,
      name: 'Vikram Patel',
      apartment: 'D-101',
      block: 'D',
      rating: 4,
      date: '2024-01-05',
      review: 'Great place for families with kids. The playground is safe and well-maintained. Kids love the open air theatre events.',
      verified: true
    },
    {
      id: 5,
      name: 'Kavitha Reddy',
      apartment: 'E-101',
      block: 'E',
      rating: 5,
      date: '2024-01-02',
      review: 'Executive living at its best! Spacious apartments, excellent privacy, and the concierge service is outstanding. Worth every penny.',
      verified: true
    },
    {
      id: 6,
      name: 'Suresh Nair',
      apartment: 'A-201',
      block: 'A',
      rating: 4,
      date: '2023-12-28',
      review: 'Love the garden view from my apartment. The community is very friendly and the monthly events bring everyone together.',
      verified: true
    },
    {
      id: 7,
      name: 'Deepa Agarwal',
      apartment: 'B-101',
      block: 'B',
      rating: 5,
      date: '2023-12-25',
      review: 'Moved in 6 months ago and couldn\'t be happier. The furnishing quality is excellent and the water supply is never an issue.',
      verified: true
    },
    {
      id: 8,
      name: 'Arun Krishnan',
      apartment: 'C-101',
      block: 'C',
      rating: 4,
      date: '2023-12-20',
      review: 'Great location with easy access to schools and hospitals. The security is excellent and I feel very safe here.',
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesBlock = selectedBlock === 'all' || review.block === selectedBlock;
    const matchesRating = selectedRating === 'all' || review.rating === parseInt(selectedRating);
    return matchesBlock && matchesRating;
  });

  const overallStats = {
    averageRating: 4.6,
    totalReviews: reviews.length,
    ratingDistribution: {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length,
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-pink-400 fill-current' : 'text-gray-600'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 professional-fade">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Resident Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued residents about their exceptional living experience at MR Residencies. 
            Real reviews from verified tenants who call our community home.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="card-glass p-6 text-center hover-professional">
            <TrendingUp className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-3xl font-bold text-white mb-2">4.6</h3>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <MessageCircle className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-3xl font-bold text-white mb-2">{overallStats.totalReviews}</h3>
            <p className="text-gray-400">Total Reviews</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <Award className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <Star className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-3xl font-bold text-white mb-2">{overallStats.ratingDistribution[5]}</h3>
            <p className="text-gray-400">5-Star Reviews</p>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="card-glass p-8 mb-12 professional-shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-7xl font-bold gradient-text mb-4">
                {overallStats.averageRating}
              </div>
              <div className="flex justify-center mb-4">
                {renderStars(Math.round(overallStats.averageRating))}
              </div>
              <p className="text-gray-300 text-lg">
                Based on {overallStats.totalReviews} verified reviews
              </p>
            </div>

            {/* Rating Distribution */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-white">Rating Distribution</h3>
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center mb-4">
                  <span className="w-8 text-lg text-gray-300 font-semibold">{rating}</span>
                  <Star size={20} className="text-pink-400 fill-current mx-3" />
                  <div className="flex-1 bg-gray-800 rounded-full h-3 mx-3">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${(overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution] / overallStats.totalReviews) * 100}%`
                      }}
                    />
                  </div>
                  <span className="w-8 text-lg text-gray-300 font-semibold">
                    {overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card-glass p-6 mb-12 professional-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <Filter className="text-pink-400" size={24} />
            <h3 className="text-xl font-playfair font-semibold text-white">Filter Reviews</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Block</label>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="w-full p-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 transition-all"
              >
                <option value="all">All Blocks</option>
                <option value="A">Block A - Garden View</option>
                <option value="B">Block B - Premium Living</option>
                <option value="C">Block C - Fitness Hub</option>
                <option value="D">Block D - Family Zone</option>
                <option value="E">Block E - Executive Living</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Rating</label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full p-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 transition-all"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Showing {filteredReviews.length} of {reviews.length} reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredReviews.map(review => (
            <div key={review.id} className="card-glass p-8 professional-shadow hover-professional">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-pink-600">
                    <img 
                      src={review.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-400">
                      Apartment {review.apartment}
                      {review.verified && (
                        <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-pink-600/20 text-pink-400 border border-pink-600/30">
                          ✓ Verified Tenant
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-300 leading-relaxed text-lg">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-gray-500" size={64} />
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">No reviews found</h3>
            <p className="text-gray-400 mb-6 text-lg">Try adjusting your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedBlock('all');
                setSelectedRating('all');
              }}
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all professional-shadow font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600/20 to-pink-700/20 rounded-2xl text-white text-center py-16 mt-16 professional-shadow-lg border border-pink-600/30">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Experience the same quality living that our residents rave about. 
            Your perfect apartment is waiting for you.
          </p>
          <a 
            href="/apartments" 
            className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all professional-shadow text-lg"
          >
            Browse Available Apartments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
