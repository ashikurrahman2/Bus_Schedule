import React from 'react';
import './index.css';
import Header from './components/Header';
import BusSchedule from './components/BusSchedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BusSchedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;
