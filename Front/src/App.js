import './App.css';
import React, { useState } from "react";
import {Header} from './components/Header/Header';
import {Carrucel} from './components/Carrucel/Carrucel'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ruteos } from './Ruteos';

function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  //
  
  return (
    <div className="App">
      
      <Router>
        <Header size={cart.length}></Header>

        <Ruteos cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick}></Ruteos>

      </Router>
    </div>
  );
}

export default App;
