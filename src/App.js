import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SellerDashboard from './components/SellerDashboard/SellerDashboard';

const App = () => {
  return (
    <Router> 
      <div>
        <Navbar />
        
        {/* Use Routes instead of directly rendering Route */}
        <Routes>
          {/* Add routes for different pages here */}
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
