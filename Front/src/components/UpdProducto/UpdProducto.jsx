import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import "./UpdProducto.css";




export const UpdProducto=(props)=>{
    const[datos,setDatos]=useState({
        nombre:props.item.nombre,
        descripcion:props.item.descripcion,
        precio:props.item.precio,
        inventario:props.item.inventario,
        imagen:props.item.imagen



    });

    const handleInputChange =(event) =>{

        setDatos({
            ...datos,
            [event.target.name] : event.target.value

        })


    }

    const enviarDatos =(event) =>{
        event.preventDefault();
        console.log(datos.nombre+" "+datos.descripcion)

        
        fetch('/api/producto/'+props.item._id, {


            method: "PUT",
            body: JSON.stringify(datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })



            .then(response => response.json()) 
            .then(json => console.log(json))

          
            Swal.fire({
                title: 'Producto actualizado con exito',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            
        

        

         .catch(err => console.log(err));

    }

    return(

        <div className='container text-align-left'>
        <div className='row'>
    
            <h1>Actualizar Producto</h1>
                                            
            <Form onSubmit={enviarDatos}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre producto</Form.Label>
                    <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                placeholder={props.item.nombre} 
                                name="nombre"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    
                    <input 
                                type="text" 
                                className="form-control"
                                placeholder={props.item.descripcion}
                                onChange={handleInputChange}
                                name="descripcion"
                                 />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor</Form.Label>
                    
                    <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                placeholder={props.item.precio} 
                                name="precio"
                    />
                          
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Inventario</Form.Label>
                    
                    <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                placeholder={props.item.inventario} 
                                name="inventario"

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    
                    <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                placeholder={props.item.imagen} 
                                name="imagen"
                    />
                </Form.Group>

                
                <Button className="boton" variant="secondary" type="submit">
                    Actualizar
                </Button>
            </Form>
           
        </div>
    </div>


    )



}