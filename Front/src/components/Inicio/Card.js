import React from "react";

const Cards = ({ item, handleClick }) => {
  const { nombre, precio, descripcion, imagen } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imagen} alt="" />
      </div>
      <div className="details">
        <p>{nombre}</p>
        <p>Precio - {precio}$ COP</p>
        
        <button onClick={() => handleClick(item)}>Adicionar al carro</button>
      </div>
    </div>
  );
}

export default Cards;