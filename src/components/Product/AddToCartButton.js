import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import './AddToCartButton.css';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart(); // Use the addToCart function from context

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide the popup after 2 seconds
  };

  return (
    <div>
      <button className="custom-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      {showPopup && <div className="popup-add">Successfully added to cart!</div>}
    </div>
  );
};

export default AddToCartButton;
