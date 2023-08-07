import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img01 from './images/img01.png';
import img02 from './images/img02.png';
import img03 from './images/img03.png';
import './Slideshow.css';

function HomeCarousel() {
  return (
    <div className="carousel-container">
      <a href='/products'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        transitionTime={500}
        transitionTimingFunction="ease-in-out"
        showIndicators={false}
        showArrows={false}
      >
        <div className='slide'>
          <img className='carousel-image' src={img01} alt="Leashes" />
        </div>
        <div className='slide'>
          <img className='carousel-image' src={img02} alt="Straws" />
        </div>
        <div className='slide'>
          <img className='carousel-image' src={img03} alt="Leashes" />
        </div>
      </Carousel>
      </a>
    </div>
  );
}

export default HomeCarousel;
