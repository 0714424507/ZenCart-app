import React from "react";
import { Link } from "react-router-dom";


const Categories = () => {
  return (
    <div className = 'sidebar'>
      <h2>Categories</h2>
      <ul>
          <Link className="sidebar-links" to="/womens-fashion">
            <i className="fas fa-female"></i> Women's Fashion
          </Link>
        
          <Link className="sidebar-links" to="/mens-fashion">
            <i className="fas fa-male"></i> Men's Fashion
          </Link>
        
          <Link className="sidebar-links" to="/kids-and-toys">
            <i className="fas fa-child"></i> Kids and Toys
          </Link>
       
          <Link className="sidebar-links" to="/home-and-office">
            <i className="fas fa-home"></i> Home and Office
          </Link>
       
          <Link className="sidebar-links" to="/pets-and-outdoor">
            <i className="fas fa-paw"></i> Pets and Outdoor
          </Link>
      
          <Link className="sidebar-links" to="/beauty-health-and-hair">
            <i className="fas fa-heartbeat"></i> Beauty, Health, and Hair
          </Link>
      
          <Link className="sidebar-links"  to="/electronics-and-accessories">
            <i className="fas fa-mobile-alt"></i> Electronics and Accessories
          </Link>
      </ul>
    </div>
  );
};

export default Categories;
