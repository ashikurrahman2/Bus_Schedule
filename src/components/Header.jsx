import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onLoginClick, isAuthenticated, userName, onLogoutClick }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center flex-grow">Uttara University Bus Schedule</h1>
      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white text-blue-600 py-1 px-4 rounded-full">
            <FontAwesomeIcon icon={faUser} />
            <span>{userName}</span>
          </div>
          <button
            onClick={onLogoutClick}
            className="flex items-center space-x-2 bg-red-600 text-white py-1 px-4 rounded-full hover:bg-red-700"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <button 
          onClick={onLoginClick} 
          className="flex items-center space-x-2 bg-white text-blue-600 py-1 px-4 rounded-full hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Login</span>
        </button>
      )}
    </header>
  );
};

export default Header;
