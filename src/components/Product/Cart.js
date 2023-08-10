import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import Topbar from '../Topbar';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getSubtotal, updateQuantity } = useCart();

  return (
    <div>
      <Topbar />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="product-details">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">${product.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <p className="product-quantity">{product.quantity}</p>
                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p>Total Items: {cartItems.length}</p>
          <p>Subtotal: ${getSubtotal()}</p>
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>
          <Link to="/cart/checkout" className="checkout-button">
           Proceed To Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
