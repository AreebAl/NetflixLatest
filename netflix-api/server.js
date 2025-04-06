const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const dotenv=require('dotenv').config()
const app = express();


console.log("dirname",__dirname)
app.use(express.static(path.join(__dirname, '../netflix-clone/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../netflix-clone/build', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.DB_URL, {
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
