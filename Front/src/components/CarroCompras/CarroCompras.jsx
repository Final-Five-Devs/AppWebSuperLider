import React, { useState, useEffect } from "react";
import "../../Styles/cart.css";

const CarroCompras = ({ cart, setCart, handleChange }) => {
  const [precio, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.inventario * item.precio));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const vaciarCarrito = () => {
    const arr = [];
    setCart(arr);
    handlePrice(arr);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.imagen} alt="" />
            <p>{item.nombre}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.inventario}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.precio}</span>
            {/*}button onClick={() => handleRemove(item.id)}>Remove</button>*/}
          </div>
          <button onClick={() => handleRemove(item.id)}><box-icon name="trash"></box-icon></button>
        </div>
      ))}
      <div className="total">
        <span>Precio total Carrito</span>
        <span>COP $ - {precio}</span>
        <button type="button" class="btn btn-success">Pagar</button>
        <button type="button" class="btn btn-primary" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
      </div>
    </article>
  );
};

export default CarroCompras;