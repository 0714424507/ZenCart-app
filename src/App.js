import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Uncomment this line to import BrowserRouter
import './App.css';

const App = () => {
  return (
    <Router> 
      <div>
        <Navbar />
        {/* Your other components and content here */}
      </div>
    </Router>
  );
};

export default App;
