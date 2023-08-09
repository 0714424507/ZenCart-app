import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-button">
        <button>
          <Link className="sellerbar-link" to="/seller">
            Sell on ZenCart
          </Link>
        </button>
      </div>
      <ul className="navbar-list">
        <li>
          <Link className="helpbar-link" to="/help">
            Help
          </Link>
        </li>
        <li>
          <Link className="userbar-link" to="/user">
            <i className="fas fa-user"></i> Account
          </Link>
        </li>
        <li>
          <div className="cart">
            <Link className="navbar-link" to="/cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span className="cart-item-count">{totalCartItems}</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
