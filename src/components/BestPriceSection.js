import React from 'react';
import '../styles/BestPriceSection.css';

const BestPriceSection = () => {
  return (
    <div className="outer-container">
      <div className="left-container">
        <h2>BEST PRICE</h2>
        <h1>Agate Phone Grip</h1>
        <h1 className="big">
          <span className="sml">44.50$</span>19.50$
        </h1>
        <p className="text">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </p>
        <button>BUY NOW</button>
      </div>
      <div className="right-container">
        <div className="circle large-circle"></div>
        <div className="circle medium-circle"></div>
        <img className="small" src={`${process.env.PUBLIC_URL}/assets/img2.svg`} alt="img" />
      </div>
    </div>
  );
};

export default BestPriceSection;
