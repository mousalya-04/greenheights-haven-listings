import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({ full_name: '', phone: '', address: '' });

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('full_name, phone, address')
      .eq('user_id', user!.id)
      .single();
    if (data) setProfile({ full_name: data.full_name || '', phone: data.phone || '', address: data.address || '' });
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('user_id', user!.id);
    if (!error) toast({ title: 'Profile updated successfully!' });
    else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setSaving(false);
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><div className="text-pink-400 text-xl">Loading...</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-playfair font-bold gradient-text mb-8">My Profile</h1>
        <div className="card-glass rounded-2xl p-8 border border-pink-600/20">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center">
              <User className="text-white" size={28} />
            </div>
            <div className="ml-4">
              <p className="text-white font-bold text-lg">{profile.full_name || 'User'}</p>
              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" value={profile.full_name} onChange={e => setProfile(p => ({ ...p, full_name: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 placeholder-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" value={user?.email || ''} disabled
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/30 text-gray-400 rounded-xl cursor-not-allowed" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="tel" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 placeholder-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea value={profile.address} onChange={e => setProfile(p => ({ ...p, address: e.target.value }))} rows={3}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-pink-600 focus:border-pink-600 placeholder-gray-400" />
              </div>
            </div>
            <button type="submit" disabled={saving}
              className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all flex items-center justify-center disabled:opacity-50">
              <Save size={18} className="mr-2" /> {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
