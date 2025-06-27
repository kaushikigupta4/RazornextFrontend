import React from 'react';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import CategoryCarousel from './CategoryCarousel.jsx';
import Footer from './Footer.jsx';
import ProductSection from './ProductSection.jsx';

const Home = () => {
  return (
    <div>
     <Navbar/>
      <HeroSection />
      <ProductSection/>
      <CategoryCarousel />
      <Footer />
    </div>
    
    
  )
}

export default Home
