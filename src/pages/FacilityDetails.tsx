
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Phone } from 'lucide-react';

const FacilityDetails = () => {
  const { facilityId } = useParams();

  const facilityData: Record<string, any> = {
    'water-supply': {
      name: '24/7 Water Supply',
      description: 'Uninterrupted water supply with overhead tanks and bore well backup system.',
      location: 'All Blocks - Central Distribution',
      timings: '24/7 Available',
      capacity: 'Unlimited supply',
      contact: '+91 98765 43210',
      features: [
        'Overhead storage tanks',
        'Bore well backup',
        'Water quality testing',
        'Pressure maintenance system',
        'Emergency backup pumps',
        'UV water purification'
      ],
      images: [
        'https://images.unsplash.com/photo-1563453392212-326d32d2d6cb?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=600&h=400&fit=crop'
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
    },
    'parking': {
      name: 'Dedicated Parking',
      description: 'Individual covered parking spaces for each apartment with 24/7 security.',
      location: 'Ground Floor - All Blocks',
      timings: '24/7 Access',
      capacity: '150 parking spaces',
      contact: '+91 98765 43216',
      features: [
        'Covered parking spaces',
        'Individual allotment',
        'CCTV monitoring',
        'Easy access ramps',
        'Visitor parking',
        'Electric vehicle charging'
      ],
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1593979755742-3c7a83fb6cba?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
      ]
    },
    'bus-stand': {
      name: 'Bus Stand at Main Gate',
      description: 'Direct access to public transportation with regular bus services.',
      location: 'Main Gate Entrance',
      timings: '5:00 AM - 11:00 PM',
      capacity: '50 people waiting area',
      contact: '+91 98765 43217',
      features: [
        'Covered waiting area',
        'Real-time bus schedules',
        'Multiple route access',
        'Comfortable seating',
        'Digital display board',
        'Security surveillance'
      ],
      images: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1467290562625-48d3b3e10098?w=600&h=400&fit=crop'
      ]
    },
    'transport': {
      name: 'Excellent Public Transport',
      description: 'Easy connectivity to all parts of the city with multiple transport options.',
      location: 'Main Avenue Road',
      timings: '24/7 Connectivity',
      capacity: 'Multiple transport modes',
      contact: '+91 98765 43218',
      features: [
        'Multiple bus routes',
        'Auto rickshaw stand',
        'Taxi services',
        'Metro connectivity',
        'App-based transport',
        'Bicycle sharing'
      ],
      images: [
        'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1467290562625-48d3b3e10098?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop'
      ]
    },
    'hospital': {
      name: 'CityCare Hospital',
      description: 'Multi-specialty hospital with 24/7 emergency services within 2km radius.',
      location: '2km from MR Residencies',
      timings: '24/7 Emergency Services',
      capacity: '200 bed hospital',
      contact: '+91 98765 43219',
      features: [
        '24/7 emergency services',
        'Multi-specialty doctors',
        'Modern equipment',
        'Ambulance services',
        'Pharmacy available',
        'Health checkup packages'
      ],
      images: [
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
      ]
    },
    'school': {
      name: 'GreenLeaf School',
      description: 'Top-rated CBSE school with excellent academic and co-curricular programs.',
      location: '1km from MR Residencies',
      timings: '7:30 AM - 4:00 PM',
      capacity: '1000 students',
      contact: '+91 98765 43220',
      features: [
        'CBSE curriculum',
        'Experienced teachers',
        'Modern classrooms',
        'Sports facilities',
        'Computer lab',
        'School bus service'
      ],
      images: [
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=600&h=400&fit=crop'
      ]
    },
    'academy': {
      name: 'SmartKids Academy',
      description: 'International curriculum school with focus on holistic development.',
      location: '1.5km from MR Residencies',
      timings: '8:00 AM - 3:30 PM',
      capacity: '800 students',
      contact: '+91 98765 43221',
      features: [
        'International curriculum',
        'Smart classrooms',
        'Activity-based learning',
        'Language programs',
        'Art and music classes',
        'Transportation facility'
      ],
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop'
      ]
    },
    'restaurant': {
      name: 'TasteBuds Restaurant',
      description: 'Multi-cuisine family restaurant serving delicious Indian and international dishes.',
      location: 'Ground Floor - Block A',
      timings: '11:00 AM - 11:00 PM',
      capacity: '80 seating capacity',
      contact: '+91 98765 43222',
      features: [
        'Multi-cuisine menu',
        'Family dining area',
        'Home delivery service',
        'Private dining rooms',
        'Catering services',
        'Online ordering'
      ],
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop'
      ]
    },
    'pizza': {
      name: 'PizzaPalace',
      description: 'Popular pizza and fast food outlet with fresh ingredients and quick service.',
      location: 'Ground Floor - Block B',
      timings: '12:00 PM - 12:00 AM',
      capacity: '40 seating + takeaway',
      contact: '+91 98765 43223',
      features: [
        'Fresh pizza varieties',
        'Fast food options',
        'Quick delivery service',
        'Student discounts',
        'Party orders',
        'Online ordering app'
      ],
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop'
      ]
    },
    'supermarket': {
      name: 'FreshMart Supermarket',
      description: 'Complete grocery and daily needs store with fresh produce and household items.',
      location: 'Ground Floor - Block C',
      timings: '7:00 AM - 10:00 PM',
      capacity: 'Full grocery store',
      contact: '+91 98765 43224',
      features: [
        'Fresh vegetables & fruits',
        'Household essentials',
        'Dairy products',
        'Personal care items',
        'Home delivery',
        'Digital payment options'
      ],
      images: [
        'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
      ]
    },
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
    'jogging': {
      name: 'Jogging Track',
      description: 'Dedicated track for morning and evening walks with beautiful landscape views.',
      location: 'Central Courtyard',
      timings: '24/7 Access',
      capacity: 'Open access',
      contact: '+91 98765 43225',
      features: [
        '500m jogging track',
        'Rubber surface',
        'Distance markers',
        'Lighting for evening use',
        'Outdoor gym equipment',
        'Rest areas with benches'
      ],
      images: [
        'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
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
    }
  };

  const facility = facilityData[facilityId || ''];

  if (!facility) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Facility Not Found</h1>
          <Link to="/facilities" className="text-slate-600 hover:text-slate-700">
            ← Back to Facilities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/facilities" 
            className="inline-flex items-center text-slate-600 hover:text-slate-700 mb-4 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Facilities
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {facility.name}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            {facility.description}
          </p>
        </div>

        {/* Facility Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center mb-3">
              <MapPin className="text-slate-600 mr-3" size={20} />
              <h3 className="font-semibold text-slate-900">Location</h3>
            </div>
            <p className="text-slate-600">{facility.location}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center mb-3">
              <Clock className="text-slate-600 mr-3" size={20} />
              <h3 className="font-semibold text-slate-900">Timings</h3>
            </div>
            <p className="text-slate-600">{facility.timings}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center mb-3">
              <Users className="text-slate-600 mr-3" size={20} />
              <h3 className="font-semibold text-slate-900">Capacity</h3>
            </div>
            <p className="text-slate-600">{facility.capacity}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center mb-3">
              <Phone className="text-slate-600 mr-3" size={20} />
              <h3 className="font-semibold text-slate-900">Contact</h3>
            </div>
            <p className="text-slate-600">{facility.contact}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facility.images.map((image: string, index: number) => (
              <div key={index} className="aspect-w-4 aspect-h-3">
                <img
                  src={image}
                  alt={`${facility.name} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Features & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facility.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-slate-600 rounded-full mr-4"></div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
