import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    
    // Reset form
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about our apartments or want to schedule a visit? 
            We're here to help you find your perfect home at MR Residencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-slate-200" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">
                    MR Residencies<br />
                    Main Avenue Road, Coimbatore<br />
                    Tamil Nadu – 641001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-slate-200" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-slate-200" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">support@mrresidencies.com</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-slate-200" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              <div className="space-y-2">
                <a 
                  href="tel:+919876543210" 
                  className="block w-full bg-gradient-to-r from-slate-600 to-gray-700 text-white text-center py-3 rounded-lg hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
                >
                  Call Now for Immediate Assistance
                </a>
                <a 
                  href="/apartments" 
                  className="block w-full bg-gradient-to-r from-gray-700 to-slate-800 text-white text-center py-3 rounded-lg hover:from-gray-600 hover:to-slate-700 transition-all shadow-lg"
                >
                  Browse Available Apartments
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
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
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
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
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
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
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Interested In */}
                <div>
                  <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-300 mb-2">
                    I'm Interested In
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
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

                {/* Subject */}
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
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                {/* Message */}
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
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-slate-500 hover:to-gray-600 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us on Map</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-4 border border-gray-700">
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-300">
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
