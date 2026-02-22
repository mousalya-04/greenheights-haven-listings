import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, MapPin, IndianRupee, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Booking {
  id: string;
  check_in_date: string;
  check_out_date: string;
  total_amount: number;
  status: string;
  created_at: string;
  apartments: { block: string; number: string; rent: number } | null;
}

const BookingHistory = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    fetchBookings();
  }, [user]);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from('bookings')
      .select('*, apartments(block, number, rent)')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });
    if (!error && data) setBookings(data as any);
    setLoading(false);
  };

  const cancelBooking = async (id: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('id', id)
      .eq('user_id', user!.id);
    if (!error) {
      toast({ title: 'Booking cancelled successfully' });
      fetchBookings();
    }
  };

  const statusColor = (s: string) => {
    switch (s) {
      case 'approved': return 'bg-green-500/20 text-green-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      case 'cancelled': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><div className="text-pink-400 text-xl">Loading...</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-playfair font-bold gradient-text mb-8">My Bookings</h1>
        {bookings.length === 0 ? (
          <div className="text-center py-16 card-glass rounded-2xl">
            <Calendar className="mx-auto text-pink-400 mb-4" size={48} />
            <h2 className="text-xl text-white mb-2">No bookings yet</h2>
            <p className="text-gray-400 mb-6">Browse apartments and make your first booking!</p>
            <Link to="/apartments" className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl">
              Explore Apartments
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(b => (
              <div key={b.id} className="card-glass rounded-xl p-6 border border-pink-600/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Apartment {b.apartments?.block}-{b.apartments?.number}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center mt-1">
                      <Clock size={14} className="mr-1" /> Booked on {new Date(b.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusColor(b.status)}`}>
                    {b.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-400">
                    <Calendar size={14} className="inline mr-1" /> Check-in
                    <p className="text-white font-medium">{b.check_in_date}</p>
                  </div>
                  <div className="text-gray-400">
                    <Calendar size={14} className="inline mr-1" /> Check-out
                    <p className="text-white font-medium">{b.check_out_date}</p>
                  </div>
                  <div className="text-gray-400">
                    <IndianRupee size={14} className="inline mr-1" /> Total
                    <p className="text-pink-400 font-bold">₹{Number(b.total_amount).toLocaleString()}</p>
                  </div>
                </div>
                {b.status === 'pending' && (
                  <button onClick={() => cancelBooking(b.id)}
                    className="mt-4 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                    Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
