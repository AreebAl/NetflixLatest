import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
// import HomePage from './pages/HomePage';
// import TVShowsPage from './pages/TVShowsPage';
// import MoviesPage from './pages/MoviesPage';
// import NewPopularPage from './pages/NewPopularPage';
// import MyListPage from './pages/MyListPage';
import MovieService from './services/movieService';
import { flattenMovies, searchMovies } from './utils';
import MovieDetails from './components/MovieDetails';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await MovieService.getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
console.log("categories", categories)
  const allMovies = flattenMovies(categories);
  
  const handleSearch = (term) => {
    setSearchResults(searchMovies(allMovies, term));
  };

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        {isAuthenticated && <Header onSearch={handleSearch} setIsAuthenticated={setIsAuthenticated} />}
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
            path="/movies/:id" 
            element={isAuthenticated ? (
              <MovieDetails  />
            ) : (
              <Navigate to="/login" replace />
            )} 
          />
          {/* <Route path="/tv-shows" element={isAuthenticated ? <TVShowsPage /> : <Navigate to="/login" replace />} />
          <Route path="/movies" element={isAuthenticated ? <MoviesPage /> : <Navigate to="/login" replace />} />
          <Route path="/new-popular" element={isAuthenticated ? <NewPopularPage /> : <Navigate to="/login" replace />} />
          <Route path="/my-list" element={isAuthenticated ? <MyListPage /> : <Navigate to="/login" replace />} /> */}
          <Route 
            path="/" 
            element={isAuthenticated ? (
              <>
                <Hero />
                {loading ? (
                  <div className="text-white text-center py-20">Loading categories...</div>
                ) : error ? (
                  <div className="text-white text-center py-20">Error: {error}</div>
                ) : (
                  <CategoryList categories={categories} />
                )}
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
