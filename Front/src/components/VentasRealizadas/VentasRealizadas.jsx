import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

export const VentasRealizadas = () => {
    const [Lista, setLista] = useState([])

    useEffect(()=>{
        fetch('/api/ventas')
        .then((response) => response.json())
       .then((Lista) => {
        console.log('Desde Ventas')
        console.log(Lista)})
        .catch(err => console.log('Solicitud fallida',err));

      
                      }
                  
    )
    

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cod.venta</th>
                        <th>Descripción</th>
                        <th>Monto total venta</th>
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
                <button>
                    <Link className='nav-link'
                        to="/admin/dasboard"> Volver </Link>
                </button>
            </div>


        </>
    )
}