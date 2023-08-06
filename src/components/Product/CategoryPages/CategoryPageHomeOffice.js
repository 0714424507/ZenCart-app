import React, { useState, useEffect } from 'react';

const CategoryHomeOffice = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories/4') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching category data:', error));
  }, []);

  return (
    <div>
      <h2>Home & Office</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryHomeOffice;
