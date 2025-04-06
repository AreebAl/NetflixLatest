import React from 'react';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';

const HomePage = ({ categories }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <CategoryList categories={categories} />
    </div>
  );
};

export default HomePage;