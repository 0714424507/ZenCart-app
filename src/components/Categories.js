import React from "react";
import { Link } from "react-router-dom";
import './Categories.css';

const Categories = () => {
  return (
    <div className = 'sidebar'>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/categories/1">
            <i className="fas fa-female"></i> Women's Fashion
          </Link>
        </li>
        <li>
          <Link to="/categories/2">
            <i className="fas fa-male"></i> Men's Fashion
          </Link>
        </li>
        <li>
          <Link to="/categories/3">
            <i className="fas fa-child"></i> Kids and Toys
          </Link>
        </li>
        <li>
          <Link to="/categories/4">
            <i className="fas fa-home"></i> Home and Office
          </Link>
        </li>
        <li>
          <Link to="/categories/5">
            <i className="fas fa-paw"></i> Pets and Outdoor
          </Link>
        </li>
        <li>
          <Link to="/categories/6">
            <i className="fas fa-heartbeat"></i> Beauty, Health, and Hair
          </Link>
        </li>
        <li>
          <Link to="/categories/7">
            <i className="fas fa-mobile-alt"></i> Electronics and Accessories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
