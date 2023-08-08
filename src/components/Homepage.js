import React from 'react';
// import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import TopLayout from './TopLayout';
import Slideshow from './Slideshow';
import img04 from './images/img04.jpeg'
import img05 from './images/img05.png'


function Homepage() {
  return (
    <div className='home'>
      <TopLayout/>
      <div className='container2'>
        <div className=''>
        <Categories />
        </div>
       <div>
          <Slideshow/>
       </div>
      </div>
      <div className='little'>
           <img className="logo" src={img05} alt="little" />
      </div>
      <div className='smiles'>
           <img className="logo" src={img04} alt="smile" />
      </div>
        <div className='homegrid'>
          <ProductGrid />
        </div>
        {/* <Link to="/products">
        <button className='shopnow'>Shop <br/> Now!</button>
      </Link> */}
      </div>
  
  );
}

export default Homepage;
