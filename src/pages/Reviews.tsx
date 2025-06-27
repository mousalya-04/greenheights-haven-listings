import React, { useState } from 'react';
import { Star, User } from 'lucide-react';

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
      verified: true
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      apartment: 'B-102',
      block: 'B',
      rating: 4,
      date: '2024-01-10',
      review: 'Premium apartments with excellent finishing. The gym facilities are top-notch. Only minor issue is parking can get crowded during peak hours.',
      verified: true
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
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-4">
            Resident Reviews
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from our happy residents about their experience living at MR Residencies. 
            Real reviews from verified tenants.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 mb-8 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold text-slate-300 mb-2">
                {overallStats.averageRating}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(overallStats.averageRating))}
              </div>
              <p className="text-gray-400">
                Based on {overallStats.totalReviews} verified reviews
              </p>
            </div>

            {/* Rating Distribution */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Rating Distribution</h3>
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center mb-2">
                  <span className="w-8 text-sm text-gray-300">{rating}</span>
                  <Star size={16} className="text-yellow-400 fill-current mx-2" />
                  <div className="flex-1 bg-gray-700 rounded-full h-2 mx-2">
                    <div 
                      className="bg-slate-500 h-2 rounded-full"
                      style={{
                        width: `${(overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution] / overallStats.totalReviews) * 100}%`
                      }}
                    />
                  </div>
                  <span className="w-8 text-sm text-gray-400">
                    {overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-6 mb-8 border border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Block</label>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="w-full p-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
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
                className="w-full p-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReviews.map(review => (
            <div key={review.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-gray-700">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full flex items-center justify-center mr-4">
                    <User className="text-slate-200" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <p className="text-sm text-gray-400">
                      Apartment {review.apartment}
                      {review.verified && (
                        <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-700 text-slate-200">
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
              <p className="text-gray-300 leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-gray-500" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No reviews found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedBlock('all');
                setSelectedRating('all');
              }}
              className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-6 py-2 rounded-lg hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg text-white text-center py-12 mt-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience the same quality living that our residents rave about. 
            Your perfect apartment is waiting for you.
          </p>
          <a 
            href="/apartments" 
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Browse Available Apartments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
