import TopLayout from '../TopLayout'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories';
import AddToCartButton from './AddToCartButton';
import './ProductGrid.css'

function AllProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching products:', error));
      }, []);
      

  return(
        <div>
            <TopLayout/>
            <Categories/>
            <div className='homepage-grid2'>
                {products.map(product => (
                    <div className='all'>
                <div key={product.id} className="products-8">
                    <Link className='link-8' to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} className='8-image' />
                    </Link>
                    <Link className='link-8' to={`/products/${product.id}`}>
                    <h3>{product.name}</h3>
                    </Link>
                    <p className='price-8'>${product.price}</p>
                    <AddToCartButton product={product}/>
                </div>
                </div>
                ))}  
            </div>
        </div>
        
    );
}
export default AllProducts;

