import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="card">
      <div className="child-cards">
      <img src={`${process.env.PUBLIC_URL}/assets/Без имени-1 1.svg`} alt="Your Image" className="child-image" />
        <p>{title}</p>
        <p className="price">{price}</p>
        <button>BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductCard;
