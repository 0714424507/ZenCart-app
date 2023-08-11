import React, { useState } from 'react';
import './CheckoutForm.css';
import Topbar from '../Topbar';

const CheckoutForm = ({ onCheckout }) => {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    country: '',
    firstName: '',
    apartment: '',
    city: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(formData);
  };

  return (
    <div className="checkout-form">
      <Topbar/>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Apartment:
          <input type="text" name="apartment" value={formData.apartment} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Mpesa confirmation code:
          <input type="tel" name="mpesa confirmation" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <h1>LIPA NA MPESA TO TILL NUMBER 5244061(ZENCART)</h1>
        <button type="submit">Place order</button>
      
      </form>
    
    </div>
  );
};

export default CheckoutForm;
