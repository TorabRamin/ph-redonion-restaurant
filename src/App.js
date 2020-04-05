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
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  // // If item exist in cart then increase quantity else add new item to cart
  // // [Solution 1] // //
  // ===========================================================================
  // const addCart = (cartItem) => {
  //   const item = cartItem
  //   const itemQuantity = item.quantity
  //   const itemId = item.item.id
  //   console.log('id', itemId);
  //   console.log('item quantity:', itemQuantity);

  //   // => find item in cart
  //   const filterdItem = cart.filter((value) => {
  //     return value.item.id === itemId
  //   });

  //   // => check item exist in cart or not
  //   if (filterdItem.length !== 0) {
  //     // => if exist increase quantity
  //     console.log('Already exist');
  //     const updatedCart = cart.map(value => {
  //       if (value.item.id === itemId) {
  //         value.quantity = value.quantity + itemQuantity
  //         return value
  //       }
  //       return value
  //     })
  //     setCart(updatedCart)
  //   }
  //   // => if not exist add new item to cart
  //   else {
  //     // => update the cart
  //     setCart([...cart, cartItem]);
  //   }
  // }
  
  // // [Solution 2]
  // ===============
  // const addCart = cartItem => {
  //   let isUpdated = false;
    
  //   const updatedCart = cart.map(value => {
  //     if (value.item.id === cartItem.item.id) {
  //       isUpdated = true
  //       value.quantity = value.quantity + cartItem.quantity
  //     }
  //     return value
  //   })
    
  //   if (isUpdated) {
  //     setCart(updatedCart)
  //     return
  //   }
  //   setCart([...cart,cartItem])
  // }
 
  // // [Solution 3]
  // ===============
  const addCart = cartItem => {
    const temp = [...cart]
    const existItemIndex = temp.findIndex(({item})=>(item.id === cartItem.item.id ))
    existItemIndex !== -1? temp[existItemIndex].quantity += cartItem.quantity : temp.push(cartItem)
    setCart(temp)
  }
  
  return (
    <Router>
      <ScrollToTop>
        <Header cartItems={cart}/>
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
            <FoodDetails addCart={addCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cartItems={cart}/>
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
