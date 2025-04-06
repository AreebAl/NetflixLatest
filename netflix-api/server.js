const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/netflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/movies', moviesRouter);
app.use('/api/auth', authRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
