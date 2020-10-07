import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';
import Register from './Components/Register';

const promise = loadStripe('pk_test_51HZCkpAyfdbUtq7kYp1BYW7kiuPwh4287JeScpPwTJ921QpmyyRLGoSVTZqOZpsG68EXxX5xQZcjjRkRLzBd6rK200bW6PG0qb');

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      console.log("the user is >>>", authUser);

      if (authUser){
        // the user just logged in or the user was logged in....
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (

    //BEM
    <Router>
      <div className="App">
      <Switch>

        <Route path="/register">
          <Register />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>

        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
