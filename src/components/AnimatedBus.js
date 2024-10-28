import React from 'react';
import busImage from '../assets/bus.png'; // Ensure this path is correct

const AnimatedBus = () => {
  return (
    <div className="relative overflow-hidden h-48 bg-gray-200">
      <img 
        src={busImage}
        alt="Bus"
        className="absolute bottom-[-30px] -left-32 animate-bus" // Adjust the 'bottom' value here
      />
    </div>
  );
};

export default AnimatedBus;
