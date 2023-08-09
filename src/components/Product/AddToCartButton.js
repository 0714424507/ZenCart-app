import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './AddToCartButton.css';

const AddToCartButton = ({ product, addToCart }) => {
  return (
    <div>
      <button className="custom-button" onClick={() => addToCart(product)}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default AddToCartButton;
