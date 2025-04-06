import React, { useState, useEffect } from 'react';
import { featuredContent } from '../data/featuredContent';
import './Hero.css';

const Hero = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentItem((prev) => (prev + 1) % featuredContent.length);
        setFade(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, imageUrl, buttons } = featuredContent[currentItem];
  
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'play':
        return (
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        );
      case 'plus':
        return (
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative pt-16 pb-32 h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {featuredContent[currentItem].videoUrl ? (
        <video
          autoPlay
          muted
          loop
          className={`absolute inset-0 w-full h-full object-cover ${fade ? 'fade-out' : 'fade-in'}`}
        >
          <source src={featuredContent[currentItem].videoUrl} type="video/mp4" />
        </video>
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover ${fade ? 'fade-out' : 'fade-in'}`}
        />
      )}
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 hero-content">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hero-title">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-md mb-6 hero-description">
          {description}
        </p>
        <div className="flex space-x-4 hero-buttons">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className={`${button.className} px-6 py-2 rounded flex items-center hover:bg-opacity-80 transition`}
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                {getIcon(button.icon)}
              </svg>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;