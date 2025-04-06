const express = require('express');
const router = express.Router();
const Category = require('../models/Movie');

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find({}).populate('movies');
    if (!categories) return res.status(404).json({ message: 'No categories found' });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get movies in a category
router.get('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).select('movies');
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category.movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get movie details
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({ 'movies._id': req.params.id });
    if (!category) return res.status(404).json({ message: 'Movie not found' });
    
    const movie = category.movies.id(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
