import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';
import AddToCartButton from './AddToCartButton';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        const displayedProducts = data.slice(0, 3);
        setProducts(displayedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="suggested-products">
      <div className='homepage-grid'>
        {products.map(product => (
          <div key={product.id} className="products-8">
            <Link className='link-8' to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} className='8-image' />
            </Link>
            <Link className='link-8' to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <p className='price-8'>${product.price}</p>
            <AddToCartButton product={product} />
          </div>
        ))}  
      </div>
    </div>
  );
};

export default ProductGrid;
