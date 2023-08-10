import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import './AddToCartButton.css';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart(); // Use the addToCart function from context
  
  return (
    <div>
      <button className="custom-button" onClick={() => addToCart(product)}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default AddToCartButton;