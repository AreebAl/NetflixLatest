import config from '../config';

const MovieService = {
  // Get all movie categories
  getCategories: async () => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/movies/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get movies in a specific category
  getMoviesByCategory: async (categoryId) => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/movies/categories/${categoryId}`);
      if (!response.ok) throw new Error('Failed to fetch movies');
      return await response.json();
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  // Get details for a specific movie
  getMovieDetails: async (movieId) => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/movies/${movieId}`);
      if (!response.ok) throw new Error('Failed to fetch movie details');
      return await response.json();
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }
};

export default MovieService;