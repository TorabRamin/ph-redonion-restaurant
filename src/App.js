import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Feature from './Components/Feature/Feature';
import FoodArea from './Components/FoodArea/FoodArea';

function App() {
  
  return (
    <div >
      <Router>
        <Header />
        <Banner />
        <FoodArea/>
        <Feature />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
