import React from 'react';
import './AboutUs.css';
import SideBar from './SideBar'

const AboutUs = () => {
  return (
    <div>
    <SideBar/>
    <div className='aboutus-body'>
    <div className="aboutus">
        <br/>
        <h3 className='welcome'>Welcome to our e-commerce platform!</h3>
        <br/>
        <p className='who'>
          <h1>Who are we?</h1>
        We are a dedicated team of innovators passionate about empowering businesses to thrive in the digital world.
        </p>
        <p className='mission'>
        <h1>What are we about?</h1>
        Our mission is to overcome the challenges faced by businesses in setting up and operating e-commerce platforms, particularly related to payment gateways.
        </p>
        <p className='problem-statement'>
        <h1>Problem Statement</h1>
        In many regions, businesses encounter hurdles in establishing a robust online presence and securing seamless payment processing. We recognized this pressing problem, and that's why we embarked on a journey to create a cutting-edge e-commerce website that addresses these challenges head-on.
        </p>
        <p className='payment-statement'>
        <h1>Secure Payment</h1>
        Our platform leverages the power of Jenga APIs, ensuring reliable and secure payment processing for businesses of all sizes. We firmly believe that providing seamless payment gateways is crucial for businesses to showcase and sell their products online efficiently. By harnessing the potential of technology and collaboration, we aim to uplift businesses and connect them with their customers on a whole new level.
        </p>
      <p className='zencart-experience'>
      <h1>✨ The zen<span>cart</span> Experience ✨</h1>
        At our core, we prioritize user experience, security, and reliability. We strive to create a user-friendly interface that simplifies the online shopping experience for both businesses and customers. Our commitment to data security ensures that every transaction is protected, building trust and confidence among our users.

        As we continue to grow and evolve, we envision a future where every business, regardless of size or location, can access the immense opportunities offered by the digital landscape. We are driven by the belief that technology can be a powerful catalyst for economic growth and empowerment.
      </p>
      <p>
      Join us on this exciting journey as we revolutionize e-commerce and pave the way for businesses to thrive in a digital world. Together, let's unlock the potential of limitless possibilities for businesses and create a brighter, more inclusive future.
        
      </p>
      <p className='end'>
      <br/>
        Thank you for being a part of our story.
        <br/>
        The zen<span>cart</span> Team
      </p>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
