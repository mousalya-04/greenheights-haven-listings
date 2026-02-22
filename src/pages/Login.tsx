import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building2, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) navigate('/home');
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { error } = await signUp(formData.email, formData.password, formData.name, formData.phone);
      if (error) {
        toast({ title: 'Sign Up Failed', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Account Created!', description: 'Please check your email to verify your account.' });
      }
    } else {
      const { error } = await signIn(formData.email, formData.password);
      if (error) {
        toast({ title: 'Login Failed', description: error.message, variant: 'destructive' });
      } else {
        navigate('/home');
      }
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-pink-400/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-600/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-36 h-36 bg-pink-500/10 rounded-full animate-bounce"></div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 transform rotate-12 hover:rotate-45 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=400&h=400&fit=crop" alt="Modern apartment exterior" className="w-full h-full object-cover rounded-full border-2 border-pink-500/30" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15 transform -rotate-12 hover:rotate-12 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop" alt="Apartment interior" className="w-full h-full object-cover rounded-full border-2 border-pink-500/30" />
        </div>
        <div className="absolute bottom-32 left-32 w-28 h-28 rounded-full opacity-10 transform rotate-45 hover:-rotate-45 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop" alt="Apartment living room" className="w-full h-full object-cover rounded-full border-2 border-pink-500/30" />
        </div>
        <div className="absolute bottom-10 right-32 w-36 h-36 rounded-full opacity-15 transform -rotate-45 hover:rotate-90 transition-transform duration-700">
          <img src="https://images.unsplash.com/photo-1486304873000-235643847519?w=400&h=400&fit=crop" alt="Modern apartment" className="w-full h-full object-cover rounded-full border-2 border-pink-500/30" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 professional-fade">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl professional-shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300 relative">
            <Building2 className="text-white" size={32} />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-md">
              <Sparkles className="text-white w-full h-full p-1" />
            </div>
          </div>
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-3">MR Residencies</h1>
          <p className="text-pink-300 text-lg">Professional Living Experience</p>
        </div>

        {/* Form Container */}
        <div className="card-glass p-8 professional-shadow-lg border border-pink-600/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-playfair font-bold text-white mb-3">
              {isSignUp ? '✨ Create Account' : '👋 Welcome Back'}
            </h2>
            <p className="text-gray-300">
              {isSignUp ? 'Join our premium community today' : 'Sign in to your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 hover:border-pink-500/50 placeholder-gray-400" required />
                </div>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 hover:border-pink-500/50 placeholder-gray-400" required />
                </div>
              </>
            )}

            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 hover:border-pink-500/50 placeholder-gray-400" required />
            </div>

            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 hover:border-pink-500/50 placeholder-gray-400" required minLength={6} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="rounded border-gray-600 text-pink-600 focus:ring-pink-500 bg-gray-800" />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-4 px-4 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 professional-shadow transform hover:scale-105 text-lg disabled:opacity-50 disabled:transform-none">
              {loading ? '⏳ Please wait...' : (isSignUp ? '🚀 Create Account' : '🔐 Sign In')}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button onClick={() => setIsSignUp(!isSignUp)} className="ml-1 text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
