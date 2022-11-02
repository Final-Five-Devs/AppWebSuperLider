
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
                        <td>{value.title}</td>
                        <td>{value.author}</td>
                        <td>$ {value.price}</td>
                        <td>
                              <img src={value.img} width="60" HEIGHT="60" alt="" />
                            
                        </td>
                        
                        <td><button variant="primary" type="submit">Eliminar</button></td>
                                        
                      
                      </tr>
                      })
                    }
                    </tbody>
                  </Table>

        </>


    )

}



