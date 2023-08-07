import React from 'react';
import './AboutUs.css';
import SideBar from './SideBar'

const ContactUs = () => {
  return (
    <div>
    <SideBar/>
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or inquiries, feel free to reach out to us. Our dedicated support team is here to assist you.
      </p>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Email</h2>
          <p>info@zencart.com</p>
        </div>
        <div className="contact-info">
          <h2>Support Email</h2>
          <p>support@zencart.com</p>
        </div>
        <div className="contact-info">
          <h2>Phone</h2>
          <p>+254 (0) 712 345 678</p>
          <p>+254 (0) 723 456 789</p>
          <p>+254 (0) 790 987 654</p>
        </div>
        <div className="contact-info">
          <h2>Address</h2>
          <p>
            Moringa School,
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
