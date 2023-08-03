import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const InfiniteScroll = () => {
  const initialItemsToShow = 12; // Number of items to load initially
  const itemsPerPage = 6; // Number of items to load on each "Load More" click

  const [products, setProducts] = useState([]);
  const [showingProducts, setShowingProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
        setShowingProducts(data.slice(0, initialItemsToShow));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    // Calculate the new range of items to show
    const newRange = showingProducts.length + itemsPerPage;
    setShowingProducts(products.slice(0, newRange));
  };

  return (
    <div>
      {showingProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {showingProducts.length < products.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default InfiniteScroll;
