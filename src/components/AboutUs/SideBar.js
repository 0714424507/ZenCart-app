import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/about-us">About Us</Link>
      <Link to="/help">Help</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/terms">T&C's</Link>
    </div>
  );
};

export default Sidebar;
