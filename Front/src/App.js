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
    arr[ind].inventarioResta += d;

    if (arr[ind].inventarioResta === 0) arr[ind].inventarioResta = 1;
    setCart([...arr]);
  };
  
  
  return (
    <div className="App">
      
      <Router>
        <Header size={cart.length}></Header>

        <Ruteos cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick}></Ruteos>

      </Router>
    </div>
  );

  
}

const PORT = process.env.PORT

console.log({PORT})

app.listen(PORT, function(){
  console.log("Servidor escuchando en el puerto " + PORT)

})




export default App;
