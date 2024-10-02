import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import BestPriceSection from './components/BestPriceSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <HeroSection />
      <ProductList />
      <BestPriceSection />
      <Footer />
    </div>
  );
};

export default App;
