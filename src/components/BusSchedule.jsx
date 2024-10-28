import React from 'react';

const buses = [
  {
    id: 1,
    busNumber: 'UUB-101',
    upTime: '8:00 AM',
    downTime: '5:00 PM',
    route: 'Main Campus - North Campus',
    driver: 'John Doe'
  },
  {
    id: 2,
    busNumber: 'UUB-102',
    upTime: '9:00 AM',
    downTime: '6:00 PM',
    route: 'Main Campus - South Campus',
    driver: 'Jane Smith'
  },
  {
    id: 3,
    busNumber: 'UUB-103',
    upTime: '7:30 AM',
    downTime: '4:30 PM',
    route: 'Main Campus - East Campus',
    driver: 'Mike Johnson'
  },
];

const BusSchedule = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Bus Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <div key={bus.id} className="p-4 border rounded shadow-lg bg-gray-100">
            <h3 className="text-xl font-semibold">{bus.busNumber}</h3>
            <p><strong>Up Time:</strong> {bus.upTime}</p>
            <p><strong>Down Time:</strong> {bus.downTime}</p>
            <p><strong>Route:</strong> {bus.route}</p>
            <p><strong>Driver:</strong> {bus.driver}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusSchedule;
