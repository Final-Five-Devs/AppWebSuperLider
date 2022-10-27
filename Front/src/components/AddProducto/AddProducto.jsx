import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const AddProducto=()=>{

    return(
        <div className='container text-align-left'>
        <div className='row'>
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