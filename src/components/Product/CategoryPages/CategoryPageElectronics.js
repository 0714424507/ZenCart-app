import React, { useState, useEffect } from 'react';

const CategoryElectronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories/7') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching category data:', error));
  }, []);

  return (
    <div>
      <h2>Electronics & Accessories</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryElectronics;
