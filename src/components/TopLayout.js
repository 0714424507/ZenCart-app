import React from "react";
import Search from "./Search";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function TopLayout({ cartItems }) {
  return (
    <div className="top-layout">
      <Topbar />
      <div className="header">
        {/* <a className="logo-link" href="/">
          <img className="logo" src={img1} alt="Logo" />
        </a> */}
      </div>
      <Navbar cartItems={cartItems} /> {/* Pass the cartItems prop */}
      <div className="third-layer">
        <nav className="navbarthird">
          <a className="logo-link" href="/">
            <h1 className="logo">zen<span>cart</span></h1>
          </a>
          <Search />
          <Link className="cart" to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default TopLayout;
