
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize2, Camera } from 'lucide-react';

const VirtualTour = () => {
  const [selectedApartment, setSelectedApartment] = useState('A-101');
  const [isPlaying, setIsPlaying] = useState(false);

  const apartments = [
    { id: 'A-101', name: 'Garden View Studio', block: 'A', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop' },
    { id: 'B-201', name: 'Premium 1BHK', block: 'B', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop' },
    { id: 'C-301', name: 'Fitness Hub 2BHK', block: 'C', image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=800&h=600&fit=crop' },
    { id: 'D-101', name: 'Family Zone 3BHK', block: 'D', image: 'https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-4">
            Virtual Tour
          </h1>
          <p className="text-xl text-gray-300">
            Experience our apartments from the comfort of your home
          </p>
        </div>

        {/* Apartment Selector */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {apartments.map(apt => (
              <button
                key={apt.id}
                onClick={() => setSelectedApartment(apt.id)}
                className={`card-glass p-4 transition-all hover-professional ${
                  selectedApartment === apt.id ? 'border-pink-600 bg-pink-600/10' : ''
                }`}
              >
                <img src={apt.image} alt={apt.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-white font-semibold">{apt.name}</h3>
                <p className="text-gray-400 text-sm">Block {apt.block}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Virtual Tour Player */}
        <div className="card-glass p-8 mb-8">
          <div className="aspect-video bg-gray-800 rounded-lg relative overflow-hidden">
            <img 
              src={apartments.find(apt => apt.id === selectedApartment)?.image}
              alt="Virtual Tour"
              className="w-full h-full object-cover"
            />
            
            {/* Tour Controls Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mb-4 hover:from-pink-700 hover:to-pink-800 transition-all"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
                <p className="text-white text-lg">
                  {isPlaying ? 'Virtual Tour Playing' : 'Start Virtual Tour'}
                </p>
              </div>
            </div>

            {/* Control Panel */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                    <RotateCcw size={16} />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                    <ZoomIn size={16} />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                    <ZoomOut size={16} />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                    <Maximize2 size={16} />
                  </button>
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-700 px-4 py-2 rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all">
                  <Camera size={16} />
                  <span>Take Screenshot</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">360° Views</h3>
            <p className="text-gray-400">Explore every corner with interactive 360-degree views</p>
          </div>
          
          <div className="card-glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <ZoomIn size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">HD Quality</h3>
            <p className="text-gray-400">High-definition visuals for crystal clear viewing experience</p>
          </div>
          
          <div className="card-glass p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Interactive</h3>
            <p className="text-gray-400">Click and navigate through rooms at your own pace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
