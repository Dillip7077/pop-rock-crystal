import React, { useState } from 'react';
import '../styles/HeroSection.css';
import img1 from './1.svg';

const HeroSection = () => {
  const products = [
    { id: 1, image: img1, title: "Crystal Agate Phone Grip - 18.99$" },
    { id: 2, image: img1, title: "Amethyst Phone Grip - 22.99$" },
    { id: 3, image: img1, title: "Rose Quartz Phone Grip - 25.99$" },
    { id: 4, image: img1, title: "Lapis Lazuli Phone Grip - 20.99$" },
    { id: 5, image: img1, title: "Tiger Eye Phone Grip - 19.99$" },
    { id: 6, image: img1, title: "Onyx Phone Grip - 23.99$" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="container">
      <div className="layout-container">
        <div className="left-side">
          <h3 className="head">Welcome to</h3>
          <h1 className="head1">Pop Rock Crystal Shop!</h1>
          <div className="head3">
    <p className="head2">
        Here you will find unique phone accessories, crystals, jewelry
        and more. Free shipping inside the U.S. and our phone grips come
        with a limited warranty. Enjoy!
    </p>
    <div className="button-container">
        <button className="action-button btn1">SHOP NOW</button>
        <button className="action-button btn2">About Us</button>
    </div>
</div>

        </div>
        <div className="right-side">
          <div className="box">
            <span className="category-banner">New lot</span>
            <div className="child-box">
              <img 
                src={products[currentIndex].image} 
                alt="Your Image" 
                className="child-image" 
              />
              <p>{products[currentIndex].title}</p>
            </div>
          </div>
          <div className="navigation">
            <button className="prev-button" onClick={handlePrev}>
              <img src={`${process.env.PUBLIC_URL}/assets/Group (1).svg`} alt="Previous" />
            </button>
            <div className="dot-indicators">
              {products.map((_, index) => (
                <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`}></span>
              ))}
            </div>
            <button className="next-button" onClick={handleNext}>
              <img src={`${process.env.PUBLIC_URL}/assets/Group (2).svg`} alt="Next" />
            </button>
          </div>
        </div>
      </div>
      <div className="scroll">
        <img src={`${process.env.PUBLIC_URL}/assets/mouse.svg`} alt="scroll" /> scroll down
      </div>
    </div>
  );
};

export default HeroSection;
