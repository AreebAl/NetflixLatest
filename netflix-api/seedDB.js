const mongoose = require('mongoose');
const Category = require('./models/Movie');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/netflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedMovies = async () => {
  await Category.deleteMany({});
  
  const categories = [
    {
      id: 1,
      title: 'Trending Now',
      movies: [
        {
          id: 1,
          title: 'The Gray Man',
          poster: 'https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg',
          genre: 'Action',
          year: 2022,
          trailer: 'https://www.youtube.com/embed/BmllggGO4pM'
        },
        {
          id: 2,
          title: 'Extraction 2',
          poster: 'https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg',
          genre: 'Action',
          year: 2023,
          trailer: 'https://www.youtube.com/embed/Y274jZs5s7s'
        },
        {
          id: 3,
          title: 'The Mother',
          poster: 'https://image.tmdb.org/t/p/w500/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
          genre: 'Thriller',
          year: 2023,
          trailer: 'https://www.youtube.com/embed/8BFdFeOS3oM'
        },
        {
          id: 4,
          title: 'Red Notice',
          poster: 'https://image.tmdb.org/t/p/w500/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg',
          genre: 'Comedy',
          year: 2021,
          trailer: 'https://www.youtube.com/embed/Pj0wz7zu3Ms'
        },
        {
          id: 5,
          title: '6 Underground',
          poster: 'https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg',
          genre: 'Action',
          year: 2019,
          trailer: 'https://www.youtube.com/embed/YLE85olJjp8'
        },
        {
          id: 6,
          title: 'The Adam Project',
          poster: 'https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg',
          genre: 'Sci-Fi',
          year: 2022,
          trailer: 'https://www.youtube.com/embed/IE8HIsIrq4o'
        }
      ]
    },
    {
      id: 2,
      title: 'Popular on Netflix',
      movies: [
        {
          id: 7,
          title: 'Stranger Things',
          poster: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
          genre: 'Sci-Fi',
          year: 2016,
          trailer: 'https://www.youtube.com/embed/b9EkMc79ZSU'
        },
        {
          id: 8,
          title: 'The Witcher',
          poster: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
          genre: 'Fantasy',
          year: 2019,
          trailer: 'https://www.youtube.com/embed/ndl1W4ltcmg'
        },
        {
          id: 9,
          title: 'Wednesday',
          poster: 'https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg',
          genre: 'Comedy',
          year: 2022,
          trailer: 'https://www.youtube.com/embed/Di310WS8zLk'
        },
        {
          id: 10,
          title: 'Money Heist',
          poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
          genre: 'Crime',
          year: 2017,
          trailer: 'https://www.youtube.com/embed/p_PJbmrX4uk'
        },
        {
          id: 11,
          title: 'Squid Game',
          poster: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
          genre: 'Thriller',
          year: 2021,
          trailer: 'https://www.youtube.com/embed/oqxAJKy0ii4'
        },
        {
          id: 12,
          title: 'The Crown',
          poster: 'https://image.tmdb.org/t/p/w500/gX8SYlnL9ZznfZwEH4KJUehuBFs.jpg',
          genre: 'Drama',
          year: 2016,
          trailer: 'https://www.youtube.com/embed/JWtnJjn6ng0'
        }
      ]
    },
    {
      id: 3,
      title: 'Continue Watching',
      movies: [
        {
          id: 13,
          title: 'Breaking Bad',
          poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
          genre: 'Drama',
          year: 2008,
          trailer: 'https://www.youtube.com/embed/HhesaQXLuRY'
        },
        {
          id: 14,
          title: 'Peaky Blinders',
          poster: 'https://image.tmdb.org/t/p/w500/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg',
          genre: 'Crime',
          year: 2013,
          trailer: 'https://www.youtube.com/embed/oVzVdvGIC7U'
        },
        {
          id: 15,
          title: 'Dark',
          poster: 'https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg',
          genre: 'Sci-Fi',
          year: 2017,
          trailer: 'https://www.youtube.com/embed/ESEUoa-mz2c'
        },
        {
          id: 16,
          title: 'Narcos',
          poster: 'https://image.tmdb.org/t/p/w500/7u3pxc0K1wx32IleAkLv78MKgrw.jpg',
          genre: 'Crime',
          year: 2015,
          trailer: 'https://www.youtube.com/embed/xl8zdCY-abw'
        },
        {
          id: 17,
          title: 'Ozark',
          poster: 'https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
          genre: 'Drama',
          year: 2017,
          trailer: 'https://www.youtube.com/embed/5hAXVqrljbs'
        },
        {
          id: 18,
          title: 'Better Call Saul',
          poster: 'https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
          genre: 'Drama',
          year: 2015,
          trailer: 'https://www.youtube.com/embed/9q4qzYrHVmI'
        }
      ]
    }
  ];

  await Category.insertMany(categories);
  console.log('Movies seeded successfully');
};

const seedUsers = async () => {
  await User.deleteMany({});
  
  const user = new User({
    email: 'test@example.com',
    password: 'password123'
  });
  
  await user.save();
  console.log('Test user seeded successfully');
};

seedMovies()
  .then(seedUsers)
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error('Seeding error:', err);
    mongoose.disconnect();
  });
