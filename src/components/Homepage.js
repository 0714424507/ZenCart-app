import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductGrid from './Product/ProductGrid';
import TopLayout from './TopLayout';
import Slideshow from './Slideshow';
import img04 from './images/img04.jpeg'
import img05 from './images/img05.png'


function Homepage({categoryId}) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${6}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategory(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }
  const firstTwoProducts = category.products.slice(1, 4);

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
        <div className='text-bubble'>
          <div className="text-bubble1"> Update: New Arrivals</div>
          <div className="text-bubble2"> Order Confirmed!</div>
          <div className="text-bubble3"> 20% OFF! Don't be left behind</div>
        </div>
      </div>
      <div className="cta-container">
        <p > Ready to enjoy exclusive offers and updates?</p>
        <a href="/signup" className="cta-button">Create an Account</a>
      </div>
        <div className='homegrid'>
          <ProductGrid />
        </div>
        <div className='grid-pets'>
          <h2 className='gird-title'>Health & <br/> Beauty</h2>
          <div className='grid-p'>
        {firstTwoProducts.map(product => (
          <div key={product.id} className='grid-id'>
            <a href={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </a>
           
          </div>
        ))}
        </div>
      </div>
        {/* <Link to="/products">
        <button className='shopnow'>Shop <br/> Now!</button>
      </Link> */}
      </div>
  
  );
}

export default Homepage;
