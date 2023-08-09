import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, clearCart, updateQuantity }) => {
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
          <p>Total: ${calculateTotal(cartItems)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
