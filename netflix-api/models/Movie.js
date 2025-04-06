const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  trailer: { type: String, required: true }
});

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  movies: [movieSchema]
});

module.exports = mongoose.model('Category', categorySchema);
