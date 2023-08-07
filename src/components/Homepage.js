import React from 'react';
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import TopLayout from './TopLayout';
import Slideshow from './Slideshow';

function Homepage() {
  return (
    <div>
      <TopLayout/>
      <div className='container2'>
        <div className=''>
        <Categories />
        </div>
       <div>
          <Slideshow/>
       </div>
      
      </div>
        <div className='homegrid'>
        <ProductGrid />
        </div>
      </div>
  
  );
}

export default Homepage;
