import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import HelpLinks from './components/HelpLinks';
import TCS from './components/TCS'; 
import About from './components/About'; 
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help/*" element={<HelpLinks />}>
            <Route index element={<TCS />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/categories/*" element={<Categories />}>
            <Route index element={<WomenFashion />} />
            <Route path="womens-fashion" element={<WomenFashion />} />
            <Route path="mens-fashion" element={<MenFashion />} />
            <Route path="kids-and-toys" element={<KidsToys />} />
            <Route path="home-and-office" element={<HomeOffice />} />
            <Route path="pets-and-outdoor" element={<PetsOutdoor />} />
            <Route path="beauty-health-and-hair" element={<BeautyHealthHair />} />
            <Route path="electronics-and-accessories" element={<ElectronicsAccessories />} />
          </Route>
        </Routes>
        {/* Your other components and content here */}
      </div>
    </Router>
  );
};

const Home = () => {
  return <div>Home Page Content</div>;
};

const WomenFashion = () => {
  return <div>Women's Fashion Category Page</div>;
};

const MenFashion = () => {
  return <div>Men's Fashion Category Page</div>;
};

const KidsToys = () => {
  return <div>Kids and Toys Category Page</div>;
};

const HomeOffice = () => {
  return <div>Home and Office Category Page</div>;
};

const PetsOutdoor = () => {
  return <div>Pets and Outdoor Category Page</div>;
};

const BeautyHealthHair = () => {
  return <div>Beauty, Health, and Hair Category Page</div>;
};

const ElectronicsAccessories = () => {
  return <div>Electronics and Accessories Category Page</div>;
};

export default App;
