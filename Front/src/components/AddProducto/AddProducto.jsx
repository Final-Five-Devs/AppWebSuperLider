import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


import { Link } from 'react-router-dom';

import '../AddProducto/AddProducto.css'

export class AddProducto extends Component{
    state = {
        nombreProducto:"",
        precioProducto:"",
        descripcionProducto:"",
        imagenProducto:"",
        inventarioProducto:"",
        inventarioRestaProducto:1
        
    }




    crearProducto()
    {
                    var serverObject = {
                        nombre : this.state.nombreProducto,
                        precio: this.state.precioProducto,
                        descripcion : this.state.descripcionProducto,
                        imagen : this.state.imagenProducto,
                        inventario: this.state.inventarioProducto,
                        inventarioResta: this.state.inventarioRestaProducto



                    }
            

            fetch('/api/producto/nuevo', {


                    method: "POST",
                    body: JSON.stringify(serverObject),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                    })



                    .then(response => response.json()) 
                    .then(json => console.log(json))

                  
                    Swal.fire({
                        title: 'Producto creado con exito',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                    
                
   
                

                 .catch(err => console.log(err));
      
           
        }

    render(){

  
        return(
            <><div className='containerForm'>
                <div className='row'>

                    <h1>Registrar nuevo Producto</h1>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="Subtitle">Nombre producto</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => this.setState({ nombreProducto: e.target.value })}
                                placeholder="Ingresar el nombre del producto" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="Subtitle">Descripción</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => this.setState({ descripcionProducto: e.target.value })}
                                placeholder="Ingresar la descripción del producto" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="Subtitle">Valor</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => this.setState({ precioProducto: e.target.value })}
                                placeholder="Ingresar el valor del producto" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="Subtitle">Inventario</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => this.setState({ inventarioProducto: e.target.value })}
                                placeholder="Ingresar el stock del producto" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="Subtitle">Imagen</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => this.setState({ imagenProducto: e.target.value })}
                                placeholder="Ingresar la imagen del producto" />
                        </Form.Group>

                        <Button onClick={() => {
                            this.crearProducto();
                        } } variant="primary" type="submit">
                            Registrar producto
                        </Button>
                    </Form>
                </div>
            </div><div className='col-12 col-md-4'>
                    <button button type = "button"
                    class = "btn btn-outline-secondary"
                    id = 'btnVolverAddProducto' >
                        <Link className='nav-link'
                            to="/admin/dasboard"> Volver </Link>
                    </button>
                </div></>
        )
    }
}