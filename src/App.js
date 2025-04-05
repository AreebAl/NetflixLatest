import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';
import { categories } from './data';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <CategoryList categories={categories} />
      <Footer />
    </div>
  );
}

export default App;