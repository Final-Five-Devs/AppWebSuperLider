import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';


export class UpdProducto extends Component{


    
    
    
    
   
    state = {
        nombreProducto:"",
        precioProducto:"",
        descripcionProducto:"",
        imagenProducto:"",
        inventarioProducto:"",
        inventarioRestaProducto:1
        
    }
    

  

    ActualizarProducto(id)
    {
                    var serverObject = {
                        nombre : this.state.nombreProducto,
                        precio: this.state.precioProducto,
                        descripcion : this.state.descripcionProducto,
                        imagen : this.state.imagenProducto,
                        inventario: this.state.inventarioProducto,
                        inventarioResta: this.state.inventarioRestaProducto
                    }
                    
                   console.log(id);
                   /* fetch('/api/producto/'+id, {
                            method: "PUT",
                            body: JSON.stringify(serverObject),
                            headers: {"Content-type": "application/json; charset=UTF-8"}
                            })
                            .then(response => response.json()) 
                            .then(json => console.log(json))
                            .catch(err => console.log(err));*/
    }
    render(){
    
        return(

            <div className='container text-align-left'>
            <div className='row'>
        
                        <div className='col-12 col-md-4'>
                            <button type="button" class="btn btn-outline-secondary" >
                          <Link className='nav-link' to="/admin/dasboard">Volver</Link>
                          </button>
                       </div>
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre producto</Form.Label>
                        <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({ nombreProducto: e.target.value})}
                                    placeholder="Ingrese aca el nombre del producto" />
    
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripción</Form.Label>
                        
                        <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({ descripcionProducto: e.target.value})}
                                    placeholder="Ingrese aca la descripción del Producto" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Valor</Form.Label>
                        
                        <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({ precioProducto: e.target.value})}
                                    placeholder="Ingrese aca el precio Producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Inventario</Form.Label>
                        
                        <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({ inventarioProducto: e.target.value})}
                                    placeholder="Ingrese aca el inventario Producto" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        
                        <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({ imagenProducto: e.target.value})}
                                    placeholder="Ingrese aca la imagen del Producto" />
                    </Form.Group>
                    <Button onClick={() => {
                                    this.ActualizarProducto()
                                }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    
    
        )
    }
}




