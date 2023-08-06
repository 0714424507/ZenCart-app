import React, { useState, useEffect } from 'react';

const CategoryMen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories/2') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching category data:', error));
  }, []);

  return (
    <div>
      <h2>Men's Fashion</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryMen;
