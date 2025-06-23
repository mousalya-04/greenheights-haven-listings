
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Phone } from 'lucide-react';

const FacilityDetails = () => {
  const { facilityId } = useParams();

  const facilityData: Record<string, any> = {
    'gym': {
      name: 'Modern Fitness Center',
      description: 'State-of-the-art fitness facility with latest equipment and personal training services.',
      location: 'Block C, Ground Floor',
      timings: '5:00 AM - 11:00 PM',
      capacity: '50 people',
      contact: '+91 98765 43211',
      features: [
        'Latest cardio equipment',
        'Weight training area',
        'Personal trainers available',
        'Group fitness classes',
        'Yoga and aerobics studio',
        'Locker facilities'
      ],
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop'
      ]
    },
    'swimming-pool': {
      name: 'Olympic Size Swimming Pool',
      description: 'Crystal clear swimming pool with separate areas for adults and children.',
      location: 'Block B, Terrace Level',
      timings: '6:00 AM - 10:00 PM',
      capacity: '30 people',
      contact: '+91 98765 43212',
      features: [
        'Olympic size pool',
        'Separate kids pool',
        'Pool deck with loungers',
        'Swimming lessons available',
        'Water purification system',
        'Lifeguard on duty'
      ],
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop'
      ]
    },
    'garden': {
      name: 'Rooftop Garden & Park',
      description: 'Beautiful landscaped garden with walking paths and seating areas.',
      location: 'Block A, Rooftop',
      timings: '24/7 Access',
      capacity: 'Open space',
      contact: '+91 98765 43213',
      features: [
        'Landscaped gardens',
        'Walking pathways',
        'Meditation area',
        'Children\'s play area',
        'Outdoor seating',
        'Organic herb garden'
      ],
      images: [
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop'
      ]
    },
    'theatre': {
      name: 'Open Air Theatre',
      description: 'Community entertainment venue for events, movies, and cultural programs.',
      location: 'Central Courtyard',
      timings: 'Event based',
      capacity: '200 people',
      contact: '+91 98765 43214',
      features: [
        'Open air amphitheater',
        'Professional sound system',
        'Large projection screen',
        'Comfortable seating',
        'Event hosting facility',
        'Cultural program venue'
      ],
      images: [
        'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1489599388092-898fb94b8936?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop'
      ]
    },
    'security': {
      name: '24/7 Security with CCTV',
      description: 'Round-the-clock security with trained personnel and surveillance systems.',
      location: 'Main Gate & All Blocks',
      timings: '24/7 Service',
      capacity: 'Full coverage',
      contact: '+91 98765 43215',
      features: [
        '24/7 security personnel',
        'CCTV surveillance',
        'Access control system',
        'Visitor management',
        'Emergency response',
        'Patrol services'
      ],
      images: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fbd6c0cd7d50?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&h=400&fit=crop'
      ]
    }
  };

  const facility = facilityData[facilityId || ''];

  if (!facility) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Facility Not Found</h1>
          <Link to="/facilities" className="text-purple-600 hover:text-purple-700">
            ← Back to Facilities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/facilities" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Facilities
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {facility.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {facility.description}
          </p>
        </div>

        {/* Facility Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <MapPin className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold">Location</h3>
            </div>
            <p className="text-gray-600">{facility.location}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <Clock className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold">Timings</h3>
            </div>
            <p className="text-gray-600">{facility.timings}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <Users className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold">Capacity</h3>
            </div>
            <p className="text-gray-600">{facility.capacity}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <Phone className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold">Contact</h3>
            </div>
            <p className="text-gray-600">{facility.contact}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facility.images.map((image: string, index: number) => (
              <div key={index} className="aspect-w-4 aspect-h-3">
                <img
                  src={image}
                  alt={`${facility.name} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facility.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
