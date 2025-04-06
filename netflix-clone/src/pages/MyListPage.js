import React from 'react';
import { useUserData } from '../hooks/useUserData';
import MovieCard from '../components/MovieCard';

const MyListPage = () => {
  const { myList } = useUserData();
  
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My List ({myList.length})</h1>
      {myList.length === 0 ? (
        <p className="text-gray-400">Your list is empty</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {myList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListPage;