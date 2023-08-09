import React from 'react';

const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <div>
          <button onClick={() => updateQuantity(item, 'decrease')}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item, 'increase')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
