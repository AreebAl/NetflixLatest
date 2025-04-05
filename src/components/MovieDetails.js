import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data';
import { flattenMovies, getYouTubeId } from '../utils';

const MovieDetails = () => {
  const { id } = useParams();
  const allMovies = flattenMovies(categories);
  const movie = allMovies.find(m => m.id === parseInt(id));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!movie) {
    return <div className="text-white text-center py-20">Movie not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Blurred background */}
      <div className="fixed inset-0 overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-full object-cover opacity-20 blur-md"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-20">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-80 rounded-xl overflow-hidden shadow-2xl">
          {/* Movie poster and trailer - column layout on mobile */}
          <div className="flex flex-col md:flex-row">
            {/* Poster image */}
            <div className="w-full md:w-1/3 p-4">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content area */}
            <div className="w-full md:w-2/3 p-4 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{movie.title}</h1>
              <div className="flex items-center text-gray-400 text-sm md:text-base mb-4">
                <span>{movie.year}</span>
                <span className="mx-2">•</span>
                <span>{movie.genre}</span>
              </div>

              {/* Trailer container with mobile fallback */}
              <div className="mb-6">
                {isMobile ? (
                  <div className="relative">
                    <div 
                      onClick={() => window.open(movie.trailer, '_blank')}
                      className="block relative pb-[56.25%] bg-black rounded-lg overflow-hidden active:scale-95 transition-transform cursor-pointer"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${getYouTubeId(movie.trailer)}/hqdefault.jpg`}
                        alt={`${movie.title} Trailer`}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                      Tap anywhere to watch trailer
                    </p>
                  </div>
                ) : (
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`${movie.trailer}?autoplay=0&mute=1&modestbranding=1&rel=0&playsinline=1`}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${movie.title} Trailer`}
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors flex-1">
                  Play Movie
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors flex-1">
                  My List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
