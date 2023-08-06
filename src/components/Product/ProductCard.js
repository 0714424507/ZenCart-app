import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton'; // Assuming you have the AddToCartButton component
import './ProductCard.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='product-card'>
      {products.map((product) => (
        <div key={product.id} className='product-id'>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} className='product-image' />
          </Link>
          <h2 className='product-name'>
            <Link className='product-link' to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h2>
          <p className='product-price'>${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
