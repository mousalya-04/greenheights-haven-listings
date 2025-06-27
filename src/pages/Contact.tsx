
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestedIn: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interestedIn: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 professional-fade">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with our professional team for premium apartment inquiries. 
            We're here to help you find your perfect luxury home.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="card-glass p-6 text-center hover-professional">
            <Award className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-400">Happy Residents</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <MessageSquare className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-400">Customer Support</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <Calendar className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-400">Apartments Available</p>
          </div>
          <div className="card-glass p-6 text-center hover-professional">
            <Clock className="mx-auto text-pink-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-2">&lt;24h</h3>
            <p className="text-gray-400">Response Time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="professional-slide">
            <h2 className="text-3xl font-playfair font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 card-glass p-6 hover-professional">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center flex-shrink-0 professional-shadow">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">Address</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    MR Residencies<br />
                    Main Avenue Road, Coimbatore<br />
                    Tamil Nadu – 641001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 card-glass p-6 hover-professional">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center flex-shrink-0 professional-shadow">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">Phone</h3>
                  <p className="text-gray-300 text-lg">+91 98765 43210</p>
                  <p className="text-pink-400 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 card-glass p-6 hover-professional">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center flex-shrink-0 professional-shadow">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">Email</h3>
                  <p className="text-gray-300 text-lg">support@mrresidencies.com</p>
                  <p className="text-pink-400 text-sm">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 card-glass p-6 hover-professional">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center flex-shrink-0 professional-shadow">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">Office Hours</h3>
                  <div className="text-gray-300 space-y-1 text-lg">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+919876543210" 
                  className="block w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white text-center py-4 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all professional-shadow font-semibold text-lg"
                >
                  Call Now for Immediate Assistance
                </a>
                <a 
                  href="/apartments" 
                  className="block w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white text-center py-4 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all professional-shadow font-semibold text-lg"
                >
                  Browse Available Apartments
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="professional-fade">
            <div className="card-glass p-8 professional-shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="text-pink-400" size={32} />
                <h2 className="text-3xl font-playfair font-bold text-white">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-300 mb-2">
                    I'm Interested In
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="renting">Renting an Apartment</option>
                    <option value="visit">Scheduling a Visit</option>
                    <option value="facilities">Learning About Facilities</option>
                    <option value="pricing">Getting Pricing Information</option>
                    <option value="availability">Checking Availability</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 transition-all"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 transition-all"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all professional-shadow text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 professional-fade">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Find Us on Map</h2>
          <div className="card-glass p-8 professional-shadow-lg">
            <div className="bg-gray-800/50 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-pink-400 mb-4" size={64} />
                <p className="text-gray-300 text-xl">
                  Interactive map will be displayed here<br />
                  MR Residencies, Main Avenue Road, Coimbatore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
