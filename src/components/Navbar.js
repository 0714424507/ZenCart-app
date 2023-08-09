import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomerAuthContext } from "./CustomerAuthContext";
import { useContext } from "react";
const Navbar = () => {
  const { logout } = useContext(CustomerAuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [setOrders] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const triggerLogout = () => {
    logout();
  };
  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    if (jwtToken) {
      setIsLoggedIn(true);
      fetchOrders();
    }
  }, []);
  const fetchOrders = async () => {
    try {
      const response = await fetch("https://localhost:3000/orders", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
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
          <div
            className="navbar-link"
            onClick={toggleDropdown}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <i className="fas fa-user"></i> Account
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {isLoggedIn ? (
                  <>
                    <Link className="dropdown-item" to="/user">
                      My Account
                    </Link>
                    <Link className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                    <button
                      className="dropdown-item"
                      onClick={triggerLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;





















