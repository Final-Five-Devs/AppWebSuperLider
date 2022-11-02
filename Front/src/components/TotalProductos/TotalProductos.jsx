
import Table from 'react-bootstrap/Table';
import {Lista} from '../../Data';
import { Link } from 'react-router-dom';



export const TotalProductos = () =>{

    return(
        <>

                  <div className='col-12 col-md-4'>
                        <button >
                      <Link className='nav-link' to="/admin/dasboard">Volver</Link>
                      </button>
                   </div>
            
            
                    <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Lista.map((value,key)=>{
                     return <tr>
                        
                        <td >{value.id}</td>
                        <td>{value.nombre}</td>
                        <td>{value.descripcion}</td>
                        <td>$ {value.precio}</td>
                        <td>
                              <img src={value.imagen} width="60" HEIGHT="60" alt="" />
                            
                        </td>
                        
                        <td><button variant="primary" type="submit">Eliminar</button></td>
                                        
                      
                      </tr>
                      })
                    }
                    </tbody>
                  </Table>
<<<<<<< HEAD

=======
             
>>>>>>> 01a4a0fcb503cac81b826400c7e6f9c76bac2d5e
        </>


    )

}



