import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Leashes from './images/Leashes.jpg';

function Slideshow() {
  return (
    <div className='slideshow-container'>
      <Carousel>
        <div>
        <img className='slide' src={Leashes} alt="leashe"  />
        </div>
      </Carousel>
    </div>
  );
}

export default Slideshow;


// /* Container for the slideshow */
// .slideshow-container {
//     display: flex;
//     align-items: center;
//     height: 100vh; /* Adjust the height as needed */
//   }
  
  
//   /* Image inside the slide */
  
  
//   .carousel{
    // overflow: hidden;
    // margin-top: 10%;
    // justify-content: flex-start;
    // align-items: center;
    // margin-top: -40px;
    // max-width: 600px; 
    // max-height: 600px;
    // position: absolute;
    // width: 600px;
    // height: 530px;
    // left: 100px;
    // top: 119px;
//   }