import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-button">
        <button >
          <Link className="sellerbar-link" to="/seller">
            <h3>Sell on ZenCart</h3>
          </Link>
        </button>
      </div>
      <ul className="navbar-list">
        <li>
          <Link className="helpbar-link" to="/help">
          <i className="fas fa-question"></i>  Help
          </Link>
        </li>
        <li>
          <Link className="userbar-link" to="/user">
            <i className="fas fa-user"></i> Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
