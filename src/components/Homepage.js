import React from 'react';
// import img1 from "./images/img1.png";
import { Link } from "react-router-dom";
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import TopLayout from './TopLayout';
// import LoadMore from './Product/LoadMore';
// import Pagination from './Product/Pagination';
import Slideshow from './Slideshow';

function Homepage() {
  return (
    <div>

      {/* <div className='container1'>
        <img src={img1} alt="Logo" />
        <div className='cart'>
          <Link className="navbar-link" to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </div>
      </div> */}
      <TopLayout/>
      <div className='container2'>
        <div className=''>
        <Categories />
        </div>
       <div>
          <Slideshow/>
       </div>
      
      </div>
      
        {/* <Pagination /> */}
        <div className='homegrid'>
        <ProductGrid />
        </div>
      </div>
  
  );
}

export default Homepage;
