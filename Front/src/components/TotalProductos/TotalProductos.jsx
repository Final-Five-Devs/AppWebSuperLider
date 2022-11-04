import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
// import {Lista} from '../../Data';
import { Link } from 'react-router-dom';

export const TotalProductos = () =>{

  const [Lista, setLista] = useState([])

  useEffect(()=>{

    fetch('/api/productos')
    .then((response) => response.json())
   .then((data) => {
   // console.log('EStamos en total productos:')
    //console.log(data)
    console.log('hola desde Total productos')
    let { productos } = data
    //console.log(productos)
    setLista([...productos]) 
   // console.log(Lista)
  },[]);

  })
console.log(Lista)

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
        </>

    )

}
