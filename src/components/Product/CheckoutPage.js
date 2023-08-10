
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useCart } from './CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, getSubtotal } = useCart();

  return (
    <div className="checkout-page container">
      <div className="checkout-form-container">
        <CheckoutForm />
      </div>
      <div className="cart-summary-container cart-summary-card">
        <h3>Cart Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-summary-item">
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <p>Total: ${getSubtotal()}</p>
        
      </div>
    </div>
  );
};

export default CheckoutPage;
