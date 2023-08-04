import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/wishlist">
            <i className="fas fa-heart"></i> Wishlist
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/user">
            <i className="fas fa-user"></i> User Account
          </Link>
        </li>
        
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
