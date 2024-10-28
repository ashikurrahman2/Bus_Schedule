import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onLoginClick }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center flex-grow">Uttara University Bus Schedule</h1>
      <button 
        onClick={onLoginClick} // Call the toggle function passed as a prop
        className="flex items-center space-x-2 bg-white text-blue-600 py-1 px-4 rounded-full hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faUser} />
        <span>Login</span>
      </button>
    </header>
  );
};

export default Header;
