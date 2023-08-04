import React from 'react'
import img1 from "./images/img1.png"

function Homepage(){
    return(
        <div>

        <div className='container1'>
              {/* Logo */}
        <img src={img1} alt="Logo" />
    
      {/* Search textbox and button */}
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className='cart'>
      <i className="fas fa-shopping-cart fa-2x"></i>
       </div>
        </div>

        <div className='container2'>
        </div>
        </div>
    );
}

export default Homepage;