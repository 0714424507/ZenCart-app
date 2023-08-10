import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link } from "react-router-dom";
import './User.css';
import LayOut from './TopLayout'

import { CustomerAuthContext } from './CustomerAuthContext';


function Login() {

  const {login} = useContext(CustomerAuthContext)

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = (e) => {
     e.preventDefault()
     login(email, password)
 }



  return (
    <div>
      <LayOut/>
      <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
      <div className=" login-form">
        <form onSubmit={handleSubmit} className="flex flex-col pt-10 px-4 py-5 bg-white border-2 border-blue-900 mt-20 rounded">
          <h1 className="text-2xl font-bold text-left pb-3">Login</h1>
          <label className="login-email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-md border-gray-300 p-2"
            type="email"
            placeholder="email" 
          />
          <label className="py-2 font-semibold">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-md border-gray-300 p-2"
            type="password"
            placeholder="password" 
          />
          <button
            className="bg-purple-900 hover:bg-purple-500 text-white my-5 p-2 rounded-md mx-20"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}


export default Login;