
import React, { useState } from 'react';
import { FileText, Users, DollarSign, Calendar, Settings, TrendingUp, Bell, Download } from 'lucide-react';

const PropertyManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUnits: 150,
    occupiedUnits: 142,
    monthlyRevenue: 5680000,
    pendingMaintenance: 8
  };

  const recentActivities = [
    { id: 1, type: 'lease', description: 'New lease signed for Apartment A-205', time: '2 hours ago' },
    { id: 2, type: 'payment', description: 'Rent payment received from B-101', time: '4 hours ago' },
    { id: 3, type: 'maintenance', description: 'AC repair completed in C-301', time: '6 hours ago' },
    { id: 4, type: 'inquiry', description: 'New inquiry for D-102', time: '8 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold gradient-text mb-2">Property Management</h1>
          <p className="text-gray-300">Comprehensive dashboard for managing MR Residencies</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-glass p-6 hover-professional">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Units</p>
                <p className="text-2xl font-bold text-white">{stats.totalUnits}</p>
              </div>
              <FileText className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6 hover-professional">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Occupied</p>
                <p className="text-2xl font-bold text-white">{stats.occupiedUnits}</p>
              </div>
              <Users className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6 hover-professional">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold text-white">₹{(stats.monthlyRevenue / 100000).toFixed(1)}L</p>
              </div>
              <DollarSign className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6 hover-professional">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Issues</p>
                <p className="text-2xl font-bold text-white">{stats.pendingMaintenance}</p>
              </div>
              <Bell className="text-pink-400" size={32} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="card-glass p-6">
              <h2 className="text-xl font-playfair font-semibold text-white mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-white">{activity.description}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="card-glass p-6">
              <h2 className="text-xl font-playfair font-semibold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white p-3 rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all text-left">
                  <Settings className="inline mr-2" size={16} />
                  Manage Properties
                </button>
                <button className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-all text-left">
                  <Calendar className="inline mr-2" size={16} />
                  Schedule Maintenance
                </button>
                <button className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-all text-left">
                  <TrendingUp className="inline mr-2" size={16} />
                  Generate Reports
                </button>
                <button className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-all text-left">
                  <Download className="inline mr-2" size={16} />
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
