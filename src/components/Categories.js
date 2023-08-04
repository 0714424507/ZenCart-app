import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/categories/womens-fashion">
            <i className="fas fa-female"></i> Women's Fashion
          </Link>
        </li>
        <li>
          <Link to="/categories/mens-fashion">
            <i className="fas fa-male"></i> Men's Fashion
          </Link>
        </li>
        <li>
          <Link to="/categories/kids-and-toys">
            <i className="fas fa-child"></i> Kids and Toys
          </Link>
        </li>
        <li>
          <Link to="/categories/home-and-office">
            <i className="fas fa-home"></i> Home and Office
          </Link>
        </li>
        <li>
          <Link to="/categories/pets-and-outdoor">
            <i className="fas fa-paw"></i> Pets and Outdoor
          </Link>
        </li>
        <li>
          <Link to="/categories/beauty-health-and-hair">
            <i className="fas fa-heartbeat"></i> Beauty, Health, and Hair
          </Link>
        </li>
        <li>
          <Link to="/categories/electronics-and-accessories">
            <i className="fas fa-mobile-alt"></i> Electronics and Accessories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
