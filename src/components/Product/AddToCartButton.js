import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './AddToCartButton.css'

const AddToCartButton = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <button className="custom-button" onClick={addToCart}>
        <FontAwesomeIcon icon={faCartShopping} />
         
      </button>
    </div>
  );
};

export default AddToCartButton;
