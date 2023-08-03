import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/categories">Categories</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/user">User Account</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/cart">Cart</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/sell">Sell On ZenCart</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/products">Featured Products/Promotion</Link>
      </li>
        <li>
          <Link className="navbar-link" to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;