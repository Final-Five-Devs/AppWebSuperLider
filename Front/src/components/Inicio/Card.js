import React from "react";

const Cards = ({ item, handleClick }) => {
  const { nombre, precio, imagen , inventario} = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imagen} alt="" />
      </div>
      <div className="details">
        <p>{nombre}</p>
        <p>Precio - {precio}$ COP</p>
        <p>Estado: <span id="stock_stado" className={inventario > 0 ? 'greenColor' : 'redColor'}>{inventario > 0 ? "En existencia" : "Agotado"}</span></p>
        
        <button disabled={inventario <= 0} onClick={() => handleClick(item)}>Adicionar al carro</button>
      </div>
    </div>
  );
}

export default Cards;