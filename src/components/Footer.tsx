
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GreenHeights Residency</h3>
                <p className="text-sm text-gray-400">Your Perfect Home Awaits</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience peaceful living in our modern apartment community with world-class amenities 
              and a family-friendly environment in the heart of Coimbatore.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-500" />
                <span className="text-sm">Main Street, Coimbatore, Tamil Nadu – 641001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <span className="text-sm">+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-500" />
                <span className="text-sm">support@greenheights.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/apartments" className="text-gray-400 hover:text-white transition-colors">Apartments</a></li>
              <li><a href="/facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Blocks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Blocks</h4>
            <ul className="space-y-2">
              <li><a href="/block/A" className="text-gray-400 hover:text-white transition-colors">Block A - Rooftop Garden</a></li>
              <li><a href="/block/B" className="text-gray-400 hover:text-white transition-colors">Block B - Premium Units</a></li>
              <li><a href="/block/C" className="text-gray-400 hover:text-white transition-colors">Block C - Fitness Center</a></li>
              <li><a href="/block/D" className="text-gray-400 hover:text-white transition-colors">Block D - Family Zone</a></li>
              <li><a href="/block/E" className="text-gray-400 hover:text-white transition-colors">Block E - Executive Suites</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GreenHeights Residency. All rights reserved. | Made with ❤️ for our residents
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
