import React from'react'
import { Link } from "react-router-dom";
import Searchbar from '../Search';
import Topbar from '../Topbar';


function SellerNav(){
    return(
        <>
        <Topbar/>
        <nav className="navbar">
          <div className="navbar-button">
            <button >
             <Link className="sellerbar-link" to="/product_form">
            <h3>Add product</h3>
             </Link>
           </button>
          </div>
        <ul className="navbar-list">
        <li>
          <Link className="helpbar-link" to="/help">
          <i className="fas fa-question"></i>  Help
          </Link>

          <Link className="helpbar-link" to="/seller">
          <i className="fas fa-user"></i>  shop
          </Link>
          
        </li> 
      </ul>
      
    
        </nav>
        <div className="third-layer">
        <nav className="navbarthird">
          <a className="logo-link" href="/">
            <h1 className="logo">
              zen<span>cart</span>
            </h1>
          </a>
          <Searchbar />
        </nav>
      </div>
        </>
    );
}

export default SellerNav;