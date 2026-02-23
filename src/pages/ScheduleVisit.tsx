
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ScheduleVisit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredApartment: '',
    visitDate: '',
    visitTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('schedule_visits').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferred_apartment: formData.preferredApartment || null,
        visit_date: formData.visitDate,
        visit_time: formData.visitTime,
        message: formData.message || null
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success('Visit scheduled successfully!');

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredApartment: '',
          visitDate: '',
          visitTime: '',
          message: ''
        });
      }, 3000);
    } catch (error: any) {
      toast.error('Failed to schedule visit. Please try again.');
      console.error('Error scheduling visit:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="card-glass p-12 text-center max-w-md mx-4">
          <CheckCircle className="mx-auto text-green-400 mb-6" size={64} />
          <h2 className="text-3xl font-bold text-white mb-4">Visit Scheduled!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for scheduling a visit to MR Residencies. We'll contact you within 24 hours to confirm your appointment.
          </p>
          <div className="bg-pink-900/30 border border-pink-600/30 rounded-lg p-4">
            <p className="text-pink-300 font-medium">
              📅 {formData.visitDate} at {formData.visitTime}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full shadow-lg mb-6">
            <Calendar className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Schedule Your Visit
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book a personalized tour of MR Residencies and experience luxury living firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Book Your Visit</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="inline mr-2" size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="inline mr-2" size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="inline mr-2" size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="preferredApartment" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Apartment (Optional)
                </label>
                <select
                  id="preferredApartment"
                  name="preferredApartment"
                  value={formData.preferredApartment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                >
                  <option value="">Select apartment type</option>
                  <option value="studio">Studio Apartment</option>
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="visitDate" className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    required
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="visitTime" className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Preferred Time *
                  </label>
                  <select
                    id="visitTime"
                    name="visitTime"
                    required
                    value={formData.visitTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="inline mr-2" size={16} />
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? '⏳ Scheduling...' : '📅 Schedule My Visit'}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Personal Tour Guide', desc: 'Dedicated representative will show you around' },
                  { num: '2', title: 'Apartment Viewing', desc: 'See sample apartments and available units' },
                  { num: '3', title: 'Facilities Tour', desc: 'Experience all amenities and common areas' },
                  { num: '4', title: 'Q&A Session', desc: 'Get all your questions answered' },
                ].map(item => (
                  <div key={item.num} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/90 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-pink-400" size={20} />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-pink-400" size={20} />
                  <span className="text-gray-300">support@mrresidencies.com</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-pink-900/20 border border-pink-600/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisit;
