import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { categories } from './data';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const results = [];
    categories.forEach(category => {
      category.movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(term.toLowerCase())) {
          results.push(movie);
        }
      });
    });
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header onSearch={handleSearch} />
        {searchResults.length > 0 && (
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <>
              <Hero />
              <CategoryList categories={categories} />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;