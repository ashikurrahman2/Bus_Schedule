import React, { useState } from 'react';
import { FaClock, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const buses = [
  {
    id: 1,
    busNumber: 'UUB-101',
    upTime: '8:00 AM',
    downTime: '5:00 PM',
    driver: 'Kholil',
    location: 'শিমুলতলী'
  },
  {
    id: 2,
    busNumber: 'UUB-102',
    upTime: '9:00 AM',
    downTime: '6:00 PM',
    driver: 'Abdullah',
    location: 'গাজীপুর'
  },
  {
    id: 3,
    busNumber: 'UUB-103',
    upTime: '7:30 AM',
    downTime: '4:30 PM',
    driver: 'Rashed',
    location: 'উত্তরা ইউনিভার্সিটি'
  },
];

const BusSchedule = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const handleCardClick = (bus) => {
    setSelectedBus(selectedBus === bus.id ? null : bus.id);
  };

  return (
    <section className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Bus Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <div 
            key={bus.id} 
            onClick={() => handleCardClick(bus)}
            className={`relative p-6 rounded-lg transition-all duration-300 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gray-100 transform hover:scale-105 ${
              selectedBus === bus.id ? 'scale-110' : ''
            }`}
            style={{ minHeight: '50px' }}
          >
            <div className="flex items-center text-white mb-3">
              <FaMapMarkerAlt className="mr-2 text-yellow-300 text-2xl" />
              <h3 className="text-xl font-semibold">{bus.location}</h3>
            </div>
            {selectedBus === bus.id && (
              <div 
                className="absolute top-0 left-0 w-full h-full p-4 text-black"
                style={{ 
                  backgroundColor: 'white', // পুরোপুরি সাদা ব্যাকগ্রাউন্ড
                  borderRadius: '8px' // সামান্য কোণার জন্য
                }} 
              >
                <div className="flex items-center mb-4">
                  <FaClock className="mr-2 text-green-500 text-2xl" />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-green-600">Up Time:</span>
                    <p className="ml-2 text-lg">{bus.upTime} <span className="text-red-600 font-bold">({bus.busNumber})</span></p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <FaClock className="mr-2 text-red-500 text-2xl" />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-blue-600">Down Time:</span>
                    <p className="ml-2 text-lg">{bus.downTime} <span className="text-red-600 font-bold">({bus.busNumber})</span></p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <FaUser className="mr-2 text-purple-500 text-2xl" />
                  <p><strong>Driver:</strong> {bus.driver}</p>
                </div>

                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                  onClick={() => setSelectedBus(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusSchedule;
