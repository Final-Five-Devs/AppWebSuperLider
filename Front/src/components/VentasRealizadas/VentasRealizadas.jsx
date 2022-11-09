import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

export const VentasRealizadas = () => {
   
    const [Lista, setLista] = useState([])

    useEffect(()=>{
      if (Lista=="") { 
        fetch('/api/ventas')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
               
                Object.values(datos).forEach(val =>
                    {
                        if(Array.isArray(val)){ 
                            setLista(val);
                        
                        }

                    }
                    );
                //--------------------
            }, []);
  
                    }
                }
  )
  //console.log(Lista)
                      
    return (
        <>
        <h1>Ventas Realizadas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cod.venta</th>
                        <th>Descripción</th>
                        <th>Monto Total Venta</th>
                    </tr>
                </thead>

                <tbody>
                    {Lista.map((value) => {
                      
                        return <tr>

                            <td>{value.CodVenta}</td>
                            <td>{value.descripcion}</td>
                            <td>$ {value.TotalVenta}</td>

                        </tr>
                    })
                    }
                </tbody>
            </Table>

            <div className='col-12 col-md-4' >
                <button type="button" class="btn btn-outline-secondary">
                    <Link className='nav-link'
                        to="/admin/dasboard"> Volver </Link>
                </button>
            </div>


        </>
    )
}