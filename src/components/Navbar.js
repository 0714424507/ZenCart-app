import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/categories">
            <i className="fas fa-list"></i> Categories
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/user">
            <i className="fas fa-user"></i> User Account
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/wishlist">
            <i className="fas fa-heart"></i> Wishlist
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/sell">
            <i className="fas fa-store"></i> Sell On ZenCart
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/products">
            <i className="fas fa-star"></i> Featured Products/Promotion
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/help">
            <i className="fas fa-question"></i> Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
