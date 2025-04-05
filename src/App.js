import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import MovieDetails from './components/MovieDetails';
import { categories } from './data';
import { flattenMovies, searchMovies } from './utils';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const allMovies = flattenMovies(categories);
  
  const handleSearch = (term) => {
    setSearchResults(searchMovies(allMovies, term));
  };

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        {isAuthenticated && <Header onSearch={handleSearch} />}
        {isAuthenticated && searchResults.length > 0 && (
          <div className="fixed top-16 right-0 left-0 bg-black bg-opacity-90 z-40 p-4">
            <h2 className="text-white text-xl mb-4">Search Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {searchResults.map(movie => (
                <div key={movie.id} className="text-white">
                  <img 
                    src={movie.poster} 
                    alt={movie.title}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <Routes>
          <Route 
            path="/login" 
            element={isAuthenticated ? 
              <Navigate to="/" replace /> : 
              <Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/movie/:id" 
            element={isAuthenticated ? (
              <MovieDetails />
            ) : (
              <Navigate to="/login" replace />
            )} 
          />
          <Route 
            path="/" 
            element={isAuthenticated ? (
              <>
                <Hero />
                <CategoryList categories={categories} />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" replace />
            )} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;