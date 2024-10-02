import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';  // Make sure to import Filters
import '../styles/ProductList.css';

const ProductList = () => {
  const initialProducts = [
    { id: 1, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 1", price: "18.99$" },
    { id: 2, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 2", price: "19.99$" },
    { id: 3, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 3", price: "20.99$" },
    { id: 4, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 4", price: "21.99$" },
    { id: 5, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 5", price: "22.99$" },
    { id: 6, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 6", price: "23.99$" },
    { id: 7, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 7", price: "24.99$" },
    { id: 8, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 8", price: "25.99$" },
    { id: 9, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 9", price: "26.99$" },
    { id: 10, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 10", price: "27.99$" },
    { id: 11, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 11", price: "28.99$" },
    { id: 12, image: "./assets/Без имени-1 1.svg", title: "CRYSTAL AGATE PHONE GRIP 12", price: "29.99$" },
  ];

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('best-selling');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = initialProducts.filter(product => {
    if (filter === 'best-selling') {
      return product.title.includes("1") || product.title.includes("2"); // Example filter
    }
    return true; // Show all if filter is "all"
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-high-low') {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sort === 'price-low-high') {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    return 0; // Default sorting
  });

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <Filters onFilterChange={setFilter} onSortChange={setSort} />
      <div className="cards">
        {sortedProducts.slice(0, showAll ? sortedProducts.length : 8).map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
        <div className="button-container">
          <button className="view-all-button" onClick={toggleShowAll}>
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
