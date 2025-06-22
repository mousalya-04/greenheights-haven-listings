
import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      category: 'Essential Services',
      items: [
        { name: '24/7 Water Supply', description: 'Uninterrupted water supply throughout the day', icon: '💧' },
        { name: '24/7 Security with CCTV', description: 'Round-the-clock security with surveillance cameras', icon: '🛡️' },
        { name: 'Dedicated Parking', description: 'Individual parking space for each apartment', icon: '🅿️' }
      ]
    },
    {
      category: 'Transportation & Connectivity',
      items: [
        { name: 'Bus Stand at Main Gate', description: 'Direct access to public transportation', icon: '🚌' },
        { name: 'Excellent Public Transport', description: 'Easy connectivity to all parts of the city', icon: '🚊' }
      ]
    },
    {
      category: 'Healthcare & Education',
      items: [
        { name: 'CityCare Hospital', description: 'Multi-specialty hospital within 2km radius', icon: '🏥' },
        { name: 'GreenLeaf School', description: 'Top-rated CBSE school nearby', icon: '🏫' },
        { name: 'SmartKids Academy', description: 'International curriculum school', icon: '🎓' }
      ]
    },
    {
      category: 'Dining & Shopping',
      items: [
        { name: 'TasteBuds Restaurant', description: 'Multi-cuisine family restaurant', icon: '🍽️' },
        { name: 'PizzaPalace', description: 'Popular pizza and fast food outlet', icon: '🍕' },
        { name: 'FreshMart Supermarket', description: 'Complete grocery and daily needs store', icon: '🛒' }
      ]
    },
    {
      category: 'Recreation & Fitness',
      items: [
        { name: 'Parks & Playgrounds', description: 'Green spaces for children and families', icon: '🌳' },
        { name: 'Jogging Track', description: 'Dedicated track for morning and evening walks', icon: '🏃' },
        { name: 'Modern Gym', description: 'Fully equipped fitness center', icon: '💪' },
        { name: 'Open Air Theatre', description: 'Community events and entertainment venue', icon: '🎭' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy premium amenities and services designed to enhance your living experience. 
            From essential services to recreational facilities, we have everything you need.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-12">
          {facilities.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((facility, facilityIndex) => (
                  <div 
                    key={facilityIndex}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl">{facility.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-lg text-white text-center py-16 mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Living?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community and enjoy all these amazing facilities and more. 
            Your perfect home is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apartments" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Apartments
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
