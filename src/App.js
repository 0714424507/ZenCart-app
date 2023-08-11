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
import WomensFashion from './components/Categories/WomensFashion';
import MensFashion from './components/Categories/MensFashion.js';
import KidsAndToys from './components/Categories/KidsAndToys';
import HomeAndOffice from './components/Categories/HomeAndOffice';
import PetsAndOutdoor from './components/Categories/PetsAndOutdoor';
import BeautyHealthAndHair from './components/Categories/BeautyHealthAndHair';
import ElectronicsAndAccessories from './components/Categories/ElectronicsAndAccessories';
import  AuthProvider  from './components/CustomerAuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Product/Cart';
import { CartProvider } from './components/Product/CartContext';
import SignIn from './components/SignIn';
import SellerAuthProvider from './components/SellerAuthContext';
import Register from './components/Register';
import SellerNav from './components/SellerDashboard/SellerNav';
import AddProductForm from './components/SellerDashboard/AddProductForm';
import Sellers from './components/SellerDashboard/Sellers';
import UserProfile from './components/User/UserProfile';
function App (){
  return (
    <Router>
      <SellerAuthProvider>
      <CartProvider>
      <AuthProvider>
      <div>
        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/productsgrid" element={<ProductGrid/>}/>
          <Route path="/womens-fashion" element={<WomensFashion/>}/>
          <Route path="/mens-fashion" element={<MensFashion/>}/>
          <Route path="/kids-and-toys" element={<KidsAndToys/>}/>
          <Route path="/home-and-office" element={<HomeAndOffice/>}/>
          <Route path="/pets-and-outdoor" element={<PetsAndOutdoor/>}/>
          <Route path="/beauty-health-and-hair" element={<BeautyHealthAndHair/>}/>
          <Route path="electronics-and-accessories/" element={<ElectronicsAndAccessories/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SellerNav" element={<SellerNav/>}/>
          <Route path="/product_form" element={<AddProductForm/>}/>
          <Route path="/seller" element={<Sellers/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/user/:activepage' element={<UserProfile/>} />
        </Routes>
      </div>
      </AuthProvider>
      </CartProvider>
      </SellerAuthProvider>
    </Router>
  );
};
export default App;