import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            className="h-8 mr-8"
          />
          <nav className="hidden md:flex space-x-6">
            <button className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer">Home</button>
            <button className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer">TV Shows</button>
            <button className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer">Movies</button>
            <button className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer">New & Popular</button>
            <button className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer">My List</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <FaSearch className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaBell className="h-5 w-5" />
          </button>
          <div className="w-8 h-8 rounded bg-red-600"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;