
import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaTimes, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSearch, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'TV Shows', path: '/tv' },
    { name: 'Movies', path: '/movies' },
    { name: 'New & Popular', path: '/latest' },
    { name: 'My List', path: '/mylist' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            className="h-8 mr-8"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.name}
                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white mr-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
            <div className="flex justify-end p-4">
              <button 
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-white text-2xl py-4 w-full text-center hover:bg-gray-800"
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4">
          {searchActive ? (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-black bg-opacity-70 text-white px-4 py-1 rounded border border-gray-600 focus:outline-none"
                value={searchTerm}
                onChange={handleSearch}
                autoFocus
              />
              <button 
                className="text-white ml-2"
                onClick={() => {
                  setSearchActive(false);
                  setSearchTerm('');
                  onSearch('');
                }}
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button 
              className="text-white hover:text-gray-300"
              onClick={() => setSearchActive(true)}
            >
              <FaSearch className="h-5 w-5" />
            </button>
          )}
          <button className="text-white hover:text-gray-300">
            <FaBell className="h-5 w-5" />
          </button>
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Profile"
              className="h-8 w-8 rounded cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded shadow-lg z-50">
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700">Account</button>
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700">Settings</button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => {
                      setShowDropdown(false);
                      localStorage.removeItem('token');
                      setIsAuthenticated(false);
                      navigate('/login');
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;