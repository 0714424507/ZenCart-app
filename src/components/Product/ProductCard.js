import React, { useState, useEffect } from 'react';
import AddToCartButton from './AddToCartButton';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
