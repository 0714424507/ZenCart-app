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
                <div key={product.id} className="products-2">
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
                <div className="notification">
                <div className="notification-header">
                    <h3 className="notification-title">New notification</h3>
                    <i className="fa fa-times notification-close"></i>
                </div>
                <div className="notification-container">
                    <div className="notification-media">
                    {/* <img src="https://i.pinimg.com/474x/48/57/b5/4857b5ff639a34c700929609ac8c25b0.jpg" alt="" className="notification-user-avatar"/> */}
                    <i className="fa fa-thumbs-up notification-reaction"></i>
                    </div>
                    <div className="notification-content">
                    <p className="notification-text">
                    {/* <strong>
                        <h1 className="logo">
                        zen<span>cart</span>
                        </h1>
                    </strong>, */}
                    <strong>New Arrivals</strong> and so much more @ <strong>20% OFF! Don't be left behind</strong>
                    </p>
                    <span className="notification-timer">a few seconds ago</span>
                    </div>
                    <span className="notification-status"></span>
                </div>
                </div>
        </div>
        
    );
}
export default AllProducts;

