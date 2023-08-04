import React from "react";
import { Link } from "react-router-dom";

const HelpLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/help">T&amp;Cs</Link>
      </li>
      <li>
        <Link to="/help/about">About Us</Link>
      </li>
      <li>
        <Link to="/help/contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default HelpLinks;
