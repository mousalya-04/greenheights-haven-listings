
import React from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const facilities = [
    {
      category: 'Essential Services',
      items: [
        { id: 'water-supply', name: '24/7 Water Supply', description: 'Uninterrupted water supply throughout the day', icon: '💧' },
        { id: 'security', name: '24/7 Security with CCTV', description: 'Round-the-clock security with surveillance cameras', icon: '🛡️' },
        { id: 'parking', name: 'Dedicated Parking', description: 'Individual parking space for each apartment', icon: '🅿️' }
      ]
    },
    {
      category: 'Transportation & Connectivity',
      items: [
        { id: 'bus-stand', name: 'Bus Stand at Main Gate', description: 'Direct access to public transportation', icon: '🚌' },
        { id: 'transport', name: 'Excellent Public Transport', description: 'Easy connectivity to all parts of the city', icon: '🚊' }
      ]
    },
    {
      category: 'Healthcare & Education',
      items: [
        { id: 'hospital', name: 'CityCare Hospital', description: 'Multi-specialty hospital within 2km radius', icon: '🏥' },
        { id: 'school', name: 'GreenLeaf School', description: 'Top-rated CBSE school nearby', icon: '🏫' },
        { id: 'academy', name: 'SmartKids Academy', description: 'International curriculum school', icon: '🎓' }
      ]
    },
    {
      category: 'Dining & Shopping',
      items: [
        { id: 'restaurant', name: 'TasteBuds Restaurant', description: 'Multi-cuisine family restaurant', icon: '🍽️' },
        { id: 'pizza', name: 'PizzaPalace', description: 'Popular pizza and fast food outlet', icon: '🍕' },
        { id: 'supermarket', name: 'FreshMart Supermarket', description: 'Complete grocery and daily needs store', icon: '🛒' }
      ]
    },
    {
      category: 'Recreation & Fitness',
      items: [
        { id: 'garden', name: 'Parks & Playgrounds', description: 'Green spaces for children and families', icon: '🌳' },
        { id: 'jogging', name: 'Jogging Track', description: 'Dedicated track for morning and evening walks', icon: '🏃' },
        { id: 'gym', name: 'Modern Gym', description: 'Fully equipped fitness center', icon: '💪' },
        { id: 'theatre', name: 'Open Air Theatre', description: 'Community events and entertainment venue', icon: '🎭' },
        { id: 'swimming-pool', name: 'Swimming Pool', description: 'Olympic size swimming pool with kids area', icon: '🏊' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium lifestyle with our comprehensive range of amenities and services. 
            From essential utilities to luxury recreational facilities, we have everything you need for modern living.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-16">
          {facilities.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((facility, facilityIndex) => (
                  <Link
                    key={facilityIndex}
                    to={`/facility/${facility.id}`}
                    className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-slate-200"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                        <span className="text-4xl">{facility.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                        {facility.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white text-center py-16 mt-20 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Living?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join our community and enjoy all these amazing facilities and more. 
            Your perfect home is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/apartments" 
              className="bg-white text-slate-800 px-10 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Browse Apartments
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors"
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
