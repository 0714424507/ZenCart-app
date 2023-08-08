import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './components/Product/AllProducts';
import ProductDetails from './components/Product/ProductDetails';
import Help from './components/AboutUs/Help';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/AboutUs/ContactUs';
import Terms from './components/AboutUs/Terms';
import ProductGrid from './components/Product/ProductGrid';
import Homepage from './components/Homepage'
// import  AuthProvider  from './components/CustomerAuthContext';


function App (){
  return (
    
    <Router>
      {/* <AuthProvider> */}
      <div>
        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/help" element={<Help/>} /> 
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/productsgrid" element={<ProductGrid/>}/>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      {/* </AuthProvider> */}
    </Router>
    
  );
};

export default App;
