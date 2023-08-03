import React from 'react';
import Sidebar from './Sidebar';

const HelpPage = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <h1>About Us</h1>
        <p>
          "About Us" content 
        </p>

        <h1>Help</h1>
        <p>
          "Help" content 
        </p>

        <h1>Contact Us</h1>
        <p>
          Your "Contact Us" content 
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
