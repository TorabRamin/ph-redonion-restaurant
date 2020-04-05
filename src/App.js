import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Feature from './Components/Feature/Feature';
import FoodArea from './Components/FoodArea/FoodArea';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import NotFound from './Components/NotFound/NotFound';
import Checkout from './Components/Checkout/Checkout';

function App() {
  
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/items">
            <FoodArea />
          </Route>
          <Route exact path="/">
            <Banner />
            <FoodArea/>
            <Feature />
          </Route>
          
          <Route path="/item/:itemId">
            <FoodDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        
        <Footer />
        </ScrollToTop>
      </Router>
  );
}

export default App;
