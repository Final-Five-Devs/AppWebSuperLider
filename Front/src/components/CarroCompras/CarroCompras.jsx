import React, { useState, useEffect } from "react";
import "../../Styles/cart.css";
import Swal from 'sweetalert2'

const CarroCompras = ({ cart, setCart, handleChange }) => {
  const [precio, setPrice] = useState(0);




  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.inventarioResta * item.precio));
    setPrice(ans);
  };

 

  const vaciarCarrito = () => {
    const arr = [];
    setCart(arr);
    handlePrice(arr);
  };

  useEffect(() => {
    handlePrice();
    
  });

  {/*Funcion que consulta y actualiza */}
  const ActualizarInventario = () => { if(Object.entries(cart).length !== 0){

                              cart.forEach(element => {
                                const data = { inventario: element.inventario-element.inventarioResta };
                              
                                            fetch('/api/producto/'+element._id, {
                                                        method: "PUT",
                                                        body: JSON.stringify(data),
                                                        headers: {"Content-type": "application/json; charset=UTF-8"}
                                                        })
                                                        .then(response => response.json()) 
                                                        .then(json => console.log(json))
                                                        .catch(err => console.log(err));
                              
                              
                                      
                                      
                                        



                                
                              });
                            // console.log(cart);
                              const compra={ articulos: cart,
                                            total:precio            
                              };
                                      fetch('/api/ventas/nuevo', {
                                                          method: "POST",
                                                          body: JSON.stringify(compra),
                                                          headers: {"Content-type": "application/json; charset=UTF-8"}
                                                          })
                                                          .then(response => response.json()) 
                                                          .then(json => console.log(json))
                                                          .catch(err => console.log(err));

                                                          console.log(compra);
                                                          Swal.fire({
                                                            position: 'top-center',
                                                            icon: 'success',
                                                            title: 'Compra realizada con exito',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                          })
                                                          vaciarCarrito()
                
                                                        }

  }

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item._id}>
          <div className="cart_img">
            <img src={item.imagen} alt="" />
            <p>{item.nombre}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.inventarioResta} </button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.precio}</span>
            {/*}button onClick={() => handleRemove(item.id)}>Remove</button>*/}
          </div>
          <button onClick={() => handleRemove(item._id)}><box-icon name="trash"></box-icon></button>
        </div>
      ))}
      <div className="total">
        <span>Precio total Carrito</span>
        <span>COP $ - {precio}</span>
        <button type="button" className="btn btn-success" onClick={()=>ActualizarInventario()}>Pagar</button>
        <button type="button" className="btn btn-primary" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
      </div>
    </article>
  );
};

export default CarroCompras;