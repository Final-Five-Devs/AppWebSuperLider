import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const AddProducto=()=>{

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
                    <Form.Control type="email" placeholder="Nombre del producto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="email" placeholder="Descripción del producto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="email" placeholder="Valor del producto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="email" placeholder="URL Imagen del producto" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>


    )


}