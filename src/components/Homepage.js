import React from 'react';
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import TopLayout from './TopLayout';
import Slideshow from './Slideshow';
import img04 from './images/img04.jpeg';
import img05 from './images/img05.png';

function Homepage({ cartItems }) {
  return (
    <div>
      <TopLayout cartItems={cartItems} />
      <div className='container2'>
        <div className=''>
          <Categories />
        </div>
        <div>
          <Slideshow />
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
    </div>
  );
}

export default Homepage;
