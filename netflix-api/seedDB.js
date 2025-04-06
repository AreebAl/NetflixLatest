const mongoose = require('mongoose');
const Category = require('./models/Movie');
const User = require('./models/User');
const dotenv=require('dotenv').config()
// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
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
          trailer: 'https://www.youtube.com/watch?v=BmllggGO4pM'
        },
        {
          id: 2,
          title: 'Extraction 2',
          poster: 'https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg',
          genre: 'Action',
          year: 2023,
          trailer: 'https://www.youtube.com/watch?v=Y274jZs5s7s'
        },
        {
          id: 3,
          title: 'The Mother',
          poster: 'https://image.tmdb.org/t/p/w500/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
          genre: 'Thriller',
          year: 2023,
          trailer: 'https://www.youtube.com/watch?v=8BFdFeOS3oM'
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
          poster: 'https://image.tmdb.org/t/p/w500/tjUEdX1Pzn1VqNlpUduEnnhhRH4.jpg',
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
          poster: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg',
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
        },
        {
          id: 19,
          title: 'The Queen\'s Gambit',
          poster: 'https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg',
          genre: 'Drama',
          year: 2020,
          trailer: 'https://www.youtube.com/watch?v=oZn3qSgmLqI'
        },
        {
          id: 20,
          title: 'Bridgerton',
          poster: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfMluzH5rvPug_0I5fRTeeTtlAHZFZJO1o7ga5nfyLsYqgok64-vROnH7F7OC2CyLBUWqyEtiDtVIm4lE5QmXyQcgLlAQdd1Er-yZSkY0M2-qJhDXealAfbHXN_8SkJwfgef6cRJQcnynyr46bGov2Yf.jpg?r=3fd',
          genre: 'Romance',
          year: 2020,
          trailer: 'https://www.youtube.com/embed/gpv7ayf_tyE'
        }
      ]
    },
    {
      id: 4,
      title: 'New Releases',
      movies: [
        {
          id: 21,
          title: 'The Night Agent',
          poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWNTNNhoCON3Vfz6-hKU_baCzaKe3MzYIuZIwwoDXaSa5X0-9T',
          genre: 'Thriller',
          year: 2023,
          trailer: 'https://www.youtube.com/embed/FXflfh5jdIc?si=vW2BB0EOrq5ohYf7'
        },
        {
          id: 22,
          title: 'You',
          poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTRrpmgt-2UV_0PfO3gAPM72CC7wDc3QtMjU7I_qDCFA0S_Tqd',
          genre: 'Thriller',
          year: 2018,
          trailer: 'https://www.youtube.com/embed/ga1m0wjzscU'
        },
        {
          id: 23,
          title: 'Outer Banks',
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSzMK48mAb1yd-H0PP71sJ6zmo29EGFiAeobw51GaWBrnvSMd',
          genre: 'Adventure',
          year: 2020,
          trailer: 'https://www.youtube.com/embed/Abje_mBb7Pc?si=HO6vwKw7F0j5Vr3d'
        },
        {
          id: 24,
          title: 'Shadow and Bone',
          poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR-Sul8aGnAiLGJbqiOhRYU7f_yMy1xIPCfvOpagCRlZchtIYr',
          genre: 'Fantasy',
          year: 2021,
          trailer: 'https://www.youtube.com/watch?v=b1WHQTbJ7vE'
        },
        {
          id: 25,
          title: 'The Sandman',
          poster: 'https://resizing.flixster.com/BcPdHRsYlUa2yZnwdWZDXU3YjKg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZmFlMTZiNzUtZmU2ZC00MDgxLWJjY2UtNTk2YzdhMmM5OGE2LmpwZw==',
          genre: 'Fantasy',
          year: 2022,
          trailer: 'https://www.youtube.com/embed/iZOwaeAEIw0?si=d_dnf2nIcOMaK_mm'
        }
      ]
    },
    {
      id: 5,
      title: 'Action & Adventure',
      movies: [
        {
          id: 26,
          title: 'The Umbrella Academy',
          poster: 'https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
          genre: 'Action',
          year: 2019,
          trailer: 'https://www.youtube.com/embed/0DAmWHxeoKw'
        },
        {
          id: 27,
          title: 'The Mandalorian',
          poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          genre: 'Sci-Fi',
          year: 2019,
          trailer: 'https://www.youtube.com/embed/eW7Twd85m2g'
        },
        {
          id: 28,
          title: 'The Last of Us',
          poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
          genre: 'Action',
          year: 2023,
          trailer: 'https://www.youtube.com/embed/uLtkt8BonwM'
        },
        {
          id: 29,
          title: 'House of the Dragon',
          poster: 'https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg',
          genre: 'Fantasy',
          year: 2022,
          trailer: 'https://www.youtube.com/embed/DotnJ7tTA34'
        },
        {
          id: 30,
          title: 'The Boys',
          poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNwLiJ1sRV1TQYB6PRCQ3lVKVaEmd3HvRvXoNEJnt9cojIjf4n',
          genre: 'Action',
          year: 2019,
          trailer: 'https://www.youtube.com/embed/tcrNsIaQkb4'
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
