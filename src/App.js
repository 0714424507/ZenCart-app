import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Uncomment this line to import BrowserRouter
import './App.css';
import Topbar from './components/Topbar';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router> 
      <div>
      <Topbar/>
      <Navbar />
      <Homepage/>
      </div>
    </Router>
  );
};

export default App;
