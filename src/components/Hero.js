import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Featured Content"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Money Heist
        </h1>
        <p className="text-white text-lg md:text-xl max-w-md mb-6">
          Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded flex items-center hover:bg-opacity-80 transition">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Play
          </button>
          <button className="bg-gray-600 bg-opacity-70 text-white px-6 py-2 rounded flex items-center hover:bg-opacity-50 transition">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;