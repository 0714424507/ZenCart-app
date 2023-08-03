import React, { useState } from 'react';

const AddToCartButton = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
