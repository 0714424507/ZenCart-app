import React, { useContext, useState } from 'react';
import { SellerAuthContext } from './SellerAuthContext';
import { Link } from 'react-router-dom';

function Register() {
  const { register } = useContext(SellerAuthContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShopName] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, shopName); // Use shopName instead of password
  };

  return (
    <div className="" style={{ backgroundImage: `url('./bg2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center">
        <span className="font-bold text-black font-bold  text-2xl flex-shrink-0">
          {/* <FontAwesomeIcon icon={faPlaneDeparture}  /> */}
          <span className="ml-4">Zencart</span>
        </span>
      </div>
      <div className="flex flex-col min-h-screen items-center pb-10 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pt-10 px-4 py-5 bg-white border-2 border-gray-400 mt-20 rounded"
        >
          <h1 className="text-2xl font-bold text-left pb-3">Register</h1>
          <label className="py-2 font-semibold">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 rounded-md border-gray-300"
            type="text"
          />
          <label className="py-2 font-semibold">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-md border-gray-300"
            type="email"
          />
          <label className="py-2 font-semibold">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-md border-gray-300"
            type="password"
          />
          <label className="py-2 font-semibold">Shop Name</label>
          <input
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="border-2 rounded-md border-gray-300"
            type="text"
          />
          <button
            className="bg-purple-900 hover:bg-purple-500 text-white my-5 p-1 rounded-md mx-20"
            type="submit bg-black-200 "
          >
            Register
          </button>
          <p className="text-center">
            Already have an account? <Link to="/SignIn" className="text-blue-500">SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
