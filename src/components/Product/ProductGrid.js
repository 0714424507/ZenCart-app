import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css'

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  

  const displayedProducts = products.slice(0, 8);

  return (
    <div className="suggested-products">
      <div className='homepage-grid'>
        {displayedProducts.map(product => (
          <div key={product.id} className="products-8">
            <Link className='link-8' to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} className='8-image' />
            </Link>
            <Link className='link-8' to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            </Link>
            <p className='price-8'>${product.price}</p>
          </div>
        ))}
            
      </div>
    </div>
  );
};

export default ProductGrid;

