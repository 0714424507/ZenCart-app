import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 
import TopLayout from '../TopLayout';

const Sidebar = () => {
  return (
    <div>
      <TopLayout/>
    <div className="tab-navigation">
      <Link className="tab" to="/about-us">About Us</Link>
      <Link className="tab" to="/help">Help</Link>
      <Link className="tab" to="/contact-us">Contact Us</Link>
      <Link className="tab" to="/terms">T&amp;C's</Link>
    </div>
    </div>
  );
};

export default Sidebar;
