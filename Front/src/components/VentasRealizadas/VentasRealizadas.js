import Table from 'react-bootstrap/Table';
import {
    Lista
} from '../../Data';
import {
    Link
} from 'react-router-dom';

export const VentasRealizadas = () => {

    return(
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
                    {Lista.map((value,key)=>{
                     return <tr>
                        
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>$ {value.price}</td>
                      
                      </tr>
                      })
                    }
                </tbody>
            </Table>

            <div className = 'col-12 col-md-4' >
                <button>
                    <Link className = 'nav-link'
                        to = "/admin/dasboard"> Volver </Link> 
                </button> 
            </div>


        </>
    )
}