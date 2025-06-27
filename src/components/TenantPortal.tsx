
import React, { useState } from 'react';
import { CreditCard, FileText, Wrench, MessageSquare, Calendar, User, Bell, Download } from 'lucide-react';

const TenantPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const tenantInfo = {
    name: 'Priya Sharma',
    apartment: 'A-101',
    rentDue: 45000,
    dueDate: '2024-02-01',
    lastPayment: '2024-01-01'
  };

  const maintenanceRequests = [
    { id: 1, issue: 'AC not cooling properly', status: 'In Progress', date: '2024-01-15' },
    { id: 2, issue: 'Kitchen faucet leaking', status: 'Completed', date: '2024-01-10' },
    { id: 3, issue: 'Bedroom door handle loose', status: 'Pending', date: '2024-01-12' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold gradient-text mb-2">Tenant Portal</h1>
          <p className="text-gray-300">Welcome back, {tenantInfo.name}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Apartment</p>
                <p className="text-2xl font-bold text-white">{tenantInfo.apartment}</p>
              </div>
              <User className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Rent Due</p>
                <p className="text-2xl font-bold text-white">₹{tenantInfo.rentDue.toLocaleString()}</p>
              </div>
              <CreditCard className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Due Date</p>
                <p className="text-2xl font-bold text-white">{tenantInfo.dueDate}</p>
              </div>
              <Calendar className="text-pink-400" size={32} />
            </div>
          </div>
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Maintenance</p>
                <p className="text-2xl font-bold text-white">{maintenanceRequests.length}</p>
              </div>
              <Wrench className="text-pink-400" size={32} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rent Payment */}
          <div className="card-glass p-6">
            <h2 className="text-xl font-playfair font-semibold text-white mb-6">Rent Payment</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400">Next Payment Due</p>
                <p className="text-2xl font-bold text-white">₹{tenantInfo.rentDue.toLocaleString()}</p>
                <p className="text-pink-400">Due: {tenantInfo.dueDate}</p>
              </div>
              <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all">
                Pay Rent Online
              </button>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-all">
                <Download className="inline mr-2" size={16} />
                Download Receipt
              </button>
            </div>
          </div>

          {/* Maintenance Requests */}
          <div className="card-glass p-6">
            <h2 className="text-xl font-playfair font-semibold text-white mb-6">Maintenance Requests</h2>
            <div className="space-y-3 mb-4">
              {maintenanceRequests.map(request => (
                <div key={request.id} className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">{request.issue}</p>
                      <p className="text-gray-400 text-sm">{request.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      request.status === 'Completed' ? 'bg-green-600/20 text-green-400' :
                      request.status === 'In Progress' ? 'bg-yellow-600/20 text-yellow-400' :
                      'bg-red-600/20 text-red-400'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-all">
              <Wrench className="inline mr-2" size={16} />
              New Request
            </button>
          </div>
        </div>

        {/* Communication Center */}
        <div className="mt-8">
          <div className="card-glass p-6">
            <h2 className="text-xl font-playfair font-semibold text-white mb-6">Communication Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-all text-left">
                <MessageSquare className="mb-2" size={24} />
                <p className="font-medium">Contact Management</p>
                <p className="text-sm text-gray-400">Send messages directly</p>
              </button>
              <button className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-all text-left">
                <Bell className="mb-2" size={24} />
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-gray-400">View announcements</p>
              </button>
              <button className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-all text-left">
                <FileText className="mb-2" size={24} />
                <p className="font-medium">Documents</p>
                <p className="text-sm text-gray-400">Access lease & docs</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPortal;
