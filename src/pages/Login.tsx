
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-4">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=400&fit=crop" 
            alt="Modern apartment exterior"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop" 
            alt="Apartment interior"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop" 
            alt="Apartment living room"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GH</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">GreenHeights Residency</h1>
          <p className="text-emerald-100">Your Perfect Home Awaits</p>
        </div>

        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {isSignUp ? 'Join our community today' : 'Sign in to your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
              </>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-1 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
