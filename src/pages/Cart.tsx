
import React, { useState } from 'react';
import { ShoppingCart, Trash2, Calendar, Phone, MapPin } from 'lucide-react';
import { apartments } from '../data/apartments';

const Cart = () => {
  // Mock cart data - in real app this would come from state/localStorage
  const [cart, setCart] = useState<string[]>(['a101', 'b104']);
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const cartApartments = apartments.filter(apt => cart.includes(apt.id));

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item !== id));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
    }
  };

  const calculateTotal = () => {
    const monthlyTotal = cartApartments.reduce((sum, apt) => sum + apt.rent, 0);
    return selectedPeriod === 'monthly' ? monthlyTotal : monthlyTotal * 12;
  };

  const handleRequestVisit = () => {
    if (cartApartments.length === 0) return;
    
    const apartmentNumbers = cartApartments.map(apt => `${apt.block}-${apt.number}`).join(', ');
    const message = `I would like to schedule a visit for the following apartments: ${apartmentNumbers}`;
    
    // In a real app, this would integrate with a booking system
    alert(`Visit request submitted for apartments: ${apartmentNumbers}\n\nWe will contact you within 24 hours to schedule your visit.`);
  };

  const handleContactForBooking = () => {
    if (cartApartments.length === 0) return;
    
    const apartmentNumbers = cartApartments.map(apt => `${apt.block}-${apt.number}`).join(', ');
    const phoneNumber = '+919876543210';
    const message = `Hi, I'm interested in booking the following apartments: ${apartmentNumbers}`;
    
    // Open WhatsApp or phone app
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Cart
            </h1>
            <p className="text-lg text-gray-600">
              {cartApartments.length} apartment{cartApartments.length !== 1 ? 's' : ''} ready for application
            </p>
          </div>
          {cartApartments.length > 0 && (
            <button
              onClick={handleClearCart}
              className="flex items-center px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={20} className="mr-2" />
              Clear Cart
            </button>
          )}
        </div>

        {cartApartments.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartApartments.map(apartment => (
                <div key={apartment.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="w-full md:w-48 h-32 flex-shrink-0">
                      <img
                        src={apartment.image}
                        alt={`Apartment ${apartment.block}-${apartment.number}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Apartment {apartment.block}-{apartment.number}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin size={16} className="mr-1" />
                            Block {apartment.block}, Floor {apartment.floor}
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(apartment.id)}
                          className="text-red-600 hover:text-red-700 p-2"
                          title="Remove from cart"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div>Size: {apartment.sqft} sq ft</div>
                        <div>{apartment.bedrooms} BHK</div>
                        <div>{apartment.bathrooms} Bathrooms</div>
                        <div>{apartment.furnishing}</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            ₹{apartment.rent.toLocaleString()}/month
                          </p>
                          <p className="text-sm text-gray-500">
                            ₹{(apartment.rent * 12).toLocaleString()}/year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Rental Summary
                </h2>

                {/* Period Toggle */}
                <div className="mb-6">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setSelectedPeriod('monthly')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        selectedPeriod === 'monthly'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('yearly')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        selectedPeriod === 'yearly'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Yearly
                    </button>
                  </div>
                </div>

                {/* Apartment List */}
                <div className="space-y-3 mb-6">
                  {cartApartments.map(apartment => (
                    <div key={apartment.id} className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {apartment.block}-{apartment.number}
                      </span>
                      <span className="font-medium">
                        ₹{selectedPeriod === 'monthly' 
                          ? apartment.rent.toLocaleString()
                          : (apartment.rent * 12).toLocaleString()
                        }
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total ({selectedPeriod})
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      ₹{calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleRequestVisit}
                    className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Calendar size={20} className="mr-2" />
                    Request for Visit
                  </button>
                  <button
                    onClick={handleContactForBooking}
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    Contact for Booking
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Call us directly for immediate assistance
                  </p>
                  <a 
                    href="tel:+919876543210"
                    className="text-green-600 font-medium hover:underline"
                  >
                    +91-98765-43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="text-gray-400" size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Browse our available apartments and add them to your cart to start the rental application process.
            </p>
            <a
              href="/apartments"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Apartments
            </a>
          </div>
        )}

        {/* Information Section */}
        {cartApartments.length > 0 && (
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Next Steps in the Rental Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Schedule Visit</h4>
                <p className="text-blue-700 text-sm">
                  Visit the apartments to see them in person and ask any questions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Submit Application</h4>
                <p className="text-blue-700 text-sm">
                  Complete the rental application with required documents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Move In</h4>
                <p className="text-blue-700 text-sm">
                  Sign the lease agreement and get your keys to move in.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
