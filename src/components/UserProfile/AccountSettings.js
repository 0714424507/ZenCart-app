import React, { useState } from 'react';
import './AccountSettings.css';
import Swal from 'sweetalert2';

const AccountSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getJwtToken = () => {
    // Replace this with your method to obtain the JWT token
    // For example, you might retrieve it from localStorage or a state variable
    return localStorage.getItem('jwtToken');
  };

  const handleSaveChanges = () => {
    const updatedData = {
      name: name,
      email: email
    };

    const jwtToken = getJwtToken();

    fetch('http://localhost:3000/customers/id', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Account settings updated:', data);
        // Show a success alert using sweetalert2
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Account settings updated successfully!',
        });
      })
      .catch(error => {
        console.error('Error updating account settings:', error);
      });
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name <span>*</span></label>
          <input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>

      <button className='mainbutton1' onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
