import React from 'react';
import MovieCard from './MovieCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="relative z-10 px-8 md:px-16 -mt-32 pb-16">
      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
            {category.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;