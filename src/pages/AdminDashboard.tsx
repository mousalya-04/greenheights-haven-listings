
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Calendar, Trash2, Plus, X } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) { setLoading(false); return; }
      const { data } = await supabase.rpc('has_role', { _user_id: user.id, _role: 'admin' });
      setIsAdmin(!!data);
      setLoading(false);
    };
    checkAdmin();
  }, [user]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><p className="text-white">Loading...</p></div>;
  if (!isAdmin) return <div className="min-h-screen bg-black flex items-center justify-center"><p className="text-white text-xl">Access Denied. Admin only.</p></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold gradient-text mb-8">Admin Dashboard</h1>
        <Tabs defaultValue="apartment-images" className="w-full">
          <TabsList className="bg-gray-800 border border-gray-700 mb-8">
            <TabsTrigger value="apartment-images" className="data-[state=active]:bg-pink-600"><Image className="mr-2 inline" size={16} />Apartment Images</TabsTrigger>
            <TabsTrigger value="facility-images" className="data-[state=active]:bg-pink-600"><Image className="mr-2 inline" size={16} />Facility Images</TabsTrigger>
            <TabsTrigger value="schedule-visits" className="data-[state=active]:bg-pink-600"><Calendar className="mr-2 inline" size={16} />Visit Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="apartment-images"><ApartmentImagesManager /></TabsContent>
          <TabsContent value="facility-images"><FacilityImagesManager /></TabsContent>
          <TabsContent value="schedule-visits"><ScheduleVisitsManager /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// ---- Apartment Images Manager ----
const ApartmentImagesManager = () => {
  const [apartments, setApartments] = useState<any[]>([]);
  const [selectedApt, setSelectedApt] = useState<string>('');
  const [images, setImages] = useState<any[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const [newType, setNewType] = useState('main');

  useEffect(() => {
    supabase.from('apartments').select('id, block, number, type').order('block').then(({ data }) => {
      if (data) setApartments(data);
    });
  }, []);

  useEffect(() => {
    if (!selectedApt) return;
    fetchImages();
  }, [selectedApt]);

  const fetchImages = async () => {
    const { data } = await supabase.from('apartment_images').select('*').eq('apartment_id', selectedApt).order('display_order');
    if (data) setImages(data);
  };

  const addImage = async () => {
    if (!newUrl || !selectedApt) return;
    const { error } = await supabase.from('apartment_images').insert({
      apartment_id: selectedApt,
      image_url: newUrl,
      image_type: newType,
      display_order: images.length
    });
    if (error) { toast.error('Failed to add image'); return; }
    toast.success('Image added!');
    setNewUrl('');
    fetchImages();
  };

  const deleteImage = async (id: string) => {
    const { error } = await supabase.from('apartment_images').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Image deleted');
    fetchImages();
  };

  return (
    <div className="card-glass p-6">
      <h2 className="text-xl font-bold text-white mb-4">Manage Apartment Images</h2>
      <select
        value={selectedApt}
        onChange={e => setSelectedApt(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white mb-6"
      >
        <option value="">Select an apartment</option>
        {apartments.map(a => (
          <option key={a.id} value={a.id}>Block {a.block} - {a.number} ({a.type})</option>
        ))}
      </select>

      {selectedApt && (
        <>
          {/* Add new image */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <input
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              placeholder="Image URL"
              className="flex-1 min-w-[200px] px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
            />
            <select value={newType} onChange={e => setNewType(e.target.value)} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white">
              <option value="main">Main</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
              <option value="bathroom">Bathroom</option>
              <option value="living_room">Living Room</option>
              <option value="balcony">Balcony</option>
              <option value="dining">Dining</option>
            </select>
            <button onClick={addImage} className="btn-primary px-4 py-2 flex items-center gap-2">
              <Plus size={16} /> Add
            </button>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map(img => (
              <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-700">
                <img src={img.image_url} alt={img.image_type} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={() => deleteImage(img.id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="p-2 bg-gray-800 text-gray-300 text-xs capitalize">{img.image_type}</div>
              </div>
            ))}
            {images.length === 0 && <p className="text-gray-500 col-span-full">No images for this apartment yet.</p>}
          </div>
        </>
      )}
    </div>
  );
};

// ---- Facility Images Manager ----
const FacilityImagesManager = () => {
  const facilityIds = [
    'water-supply', 'security', 'parking', 'bus-stand', 'transport',
    'hospital', 'school', 'academy', 'restaurant', 'pizza',
    'supermarket', 'gym', 'swimming-pool', 'garden', 'jogging', 'theatre'
  ];
  const [selectedFacility, setSelectedFacility] = useState('');
  const [images, setImages] = useState<any[]>([]);
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    if (!selectedFacility) return;
    fetchImages();
  }, [selectedFacility]);

  const fetchImages = async () => {
    const { data } = await supabase.from('facility_images').select('*').eq('facility_id', selectedFacility).order('display_order');
    if (data) setImages(data);
  };

  const addImage = async () => {
    if (!newUrl || !selectedFacility) return;
    const { error } = await supabase.from('facility_images').insert({
      facility_id: selectedFacility,
      image_url: newUrl,
      display_order: images.length
    });
    if (error) { toast.error('Failed to add image'); return; }
    toast.success('Image added!');
    setNewUrl('');
    fetchImages();
  };

  const deleteImage = async (id: string) => {
    const { error } = await supabase.from('facility_images').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Image deleted');
    fetchImages();
  };

  return (
    <div className="card-glass p-6">
      <h2 className="text-xl font-bold text-white mb-4">Manage Facility Images</h2>
      <select
        value={selectedFacility}
        onChange={e => setSelectedFacility(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white mb-6"
      >
        <option value="">Select a facility</option>
        {facilityIds.map(id => (
          <option key={id} value={id}>{id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</option>
        ))}
      </select>

      {selectedFacility && (
        <>
          <div className="flex gap-3 mb-6 flex-wrap">
            <input
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              placeholder="Image URL"
              className="flex-1 min-w-[200px] px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
            />
            <button onClick={addImage} className="btn-primary px-4 py-2 flex items-center gap-2">
              <Plus size={16} /> Add
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map(img => (
              <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-700">
                <img src={img.image_url} alt="facility" className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={() => deleteImage(img.id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {images.length === 0 && <p className="text-gray-500 col-span-full">No images for this facility yet.</p>}
          </div>
        </>
      )}
    </div>
  );
};

// ---- Schedule Visits Manager ----
const ScheduleVisitsManager = () => {
  const [visits, setVisits] = useState<any[]>([]);

  useEffect(() => {
    fetchVisits();
  }, []);

  const fetchVisits = async () => {
    const { data } = await supabase.from('schedule_visits').select('*').order('created_at', { ascending: false });
    if (data) setVisits(data);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('schedule_visits').update({ status }).eq('id', id);
    if (error) { toast.error('Failed to update status'); return; }
    toast.success(`Status updated to ${status}`);
    fetchVisits();
  };

  const deleteVisit = async (id: string) => {
    const { error } = await supabase.from('schedule_visits').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Visit request deleted');
    fetchVisits();
  };

  return (
    <div className="card-glass p-6">
      <h2 className="text-xl font-bold text-white mb-4">Visit Requests ({visits.length})</h2>
      <div className="space-y-4">
        {visits.map(visit => (
          <div key={visit.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="space-y-1">
                <p className="text-white font-semibold">{visit.name}</p>
                <p className="text-gray-400 text-sm">{visit.email} • {visit.phone}</p>
                <p className="text-pink-400 text-sm">📅 {visit.visit_date} at {visit.visit_time}</p>
                {visit.preferred_apartment && <p className="text-gray-400 text-sm">Apartment: {visit.preferred_apartment}</p>}
                {visit.message && <p className="text-gray-500 text-sm mt-2">"{visit.message}"</p>}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  visit.status === 'approved' ? 'bg-green-900/50 text-green-400 border border-green-600/30' :
                  visit.status === 'rejected' ? 'bg-red-900/50 text-red-400 border border-red-600/30' :
                  'bg-yellow-900/50 text-yellow-400 border border-yellow-600/30'
                }`}>
                  {visit.status}
                </span>
                <select
                  value={visit.status}
                  onChange={e => updateStatus(visit.id, e.target.value)}
                  className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <button onClick={() => deleteVisit(visit.id)} className="text-red-400 hover:text-red-300 p-1">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {visits.length === 0 && <p className="text-gray-500 text-center py-8">No visit requests yet.</p>}
      </div>
    </div>
  );
};

export default AdminDashboard;
