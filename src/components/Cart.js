import React from 'react';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity-container">
                  <div className="cart-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    {item.quantity}
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
