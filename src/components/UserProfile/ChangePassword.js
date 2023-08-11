import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ChangePassword.css'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const getJwtToken = () => {
    // Replace this with your method to obtain the JWT token
    // For example, you might retrieve it from localStorage or a state variable
    return localStorage.getItem('jwtToken');
  };

  const handleChangePassword = () => {
    const updatedPassword = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };

    const jwtToken = getJwtToken();

    fetch('http://localhost:3000/customers/id', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body: JSON.stringify(updatedPassword)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Password changed:', data);
        // Show a success alert using sweetalert2
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Password changed successfully!',
        });
      })
      .catch(error => {
        console.error('Error changing password:', error);
        // Show an error alert using sweetalert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Password change failed. Please try again.',
        });
      });
  };

  return (
    <div className='changepassword'>
      <h1 className='mainhead1'>Change Password</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='oldpass'>Old Password <span>*</span></label>
          <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='newpass'>New Password <span>*</span></label>
          <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        </div>
      </div>

      <button className='mainbutton1' onClick={handleChangePassword}>
        Save Changes
      </button>
    </div>
  );
};

export default ChangePassword;
