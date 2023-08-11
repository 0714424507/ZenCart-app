import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import TopLayout from '../TopLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getSubtotal, updateQuantity } = useCart();

  return (
    <div>
      <TopLayout />
      <h2 className='your-cart'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <p><FontAwesomeIcon icon={faBasketShopping} /> <br/>Your cart is empty </p>
          <a href='/products'>Shopping Time!</a>
        </div>
      ) : (
        <div className='inside-cart'>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id} className="cart-item">
                <div className="cart-product-details">
                  <img src={product.image} alt={product.name} className="cart-product-image" />
                  <div className="cart-product-info">
                    <p className="cart-product-name">{product.name}</p>
                    <p className="cart-product-des">{product.description}</p>
                    <p className="cart-product-price">${product.price}</p>
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                      <p className="cart-product-quantity">{product.quantity}</p>
                      <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(product.id)} className="remove-button">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-summary'>
            <h1>Cart Summary</h1>
            <p>Total Items:<span>{cartItems.length}</span></p>
            <p>Subtotal: <span>${getSubtotal()}</span></p>
            <Link to="/cart/checkout" className="checkout-button">
            Proceed To Checkout
            </Link>
            <button onClick={clearCart} className="clear-cart-button">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
