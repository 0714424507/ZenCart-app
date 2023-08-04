import React from 'react'
import img1 from "./images/img1.png"
import { Link } from "react-router-dom";
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import LoadMore from './Product/LoadMore';
import Pagination from './Product/Pagination';

function Homepage(){
    return(
        <div>

        <div className='container1'>
              {/* Logo */}
        <img src={img1} alt="Logo" />
    
      {/* Search textbox and button */}
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className='cart'>
      <Link className="navbar-link" to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i> 
       </Link>
       </div>
        </div>

        <div className='container2'>
          <Categories/>
          <Pagination/>
          <ProductGrid/>
          <LoadMore/>
        </div>
        </div>
    );
}

export default Homepage;