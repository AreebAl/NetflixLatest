import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative rounded overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-auto object-cover rounded"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold">{movie.title}</h3>
        <div className="flex items-center text-gray-300 text-sm mt-1">
          <span>{movie.year}</span>
          <span className="mx-2">•</span>
          <span>{movie.genre}</span>
        </div>
        <div className="flex space-x-2 mt-2">
          <button className="bg-white text-black rounded-full p-1 hover:bg-opacity-80">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="border border-gray-300 text-white rounded-full p-1 hover:bg-gray-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;