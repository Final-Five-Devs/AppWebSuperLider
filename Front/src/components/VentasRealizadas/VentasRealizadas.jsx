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
                    //console.log(Lista);
                }
                
  )

  const reccorerArray=()=> {
        Lista.forEach((element,index) => {

                //console.log("el valor del elemento es: "+JSON.stringify(element)+" el indice del elemento es: ");

        });    
    
    

  }


  reccorerArray();
  //console.log(Lista)
                      
    return (
        <>
        <h1>Ventas Realizadas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código venta</th>
                        <th>Descripción venta</th>
                        <th>Monto total venta</th>
                        <th>Fecha venta</th>
                        
                    </tr>
                </thead>

                <tbody>
                
                    {
                        
                       
                    Lista.map((value) => {

                                   let Date = value.createdAt;
                                   let DateCut = Date.slice(0, 10);

                                    const arrayArticulos = value.articulos;

                                    var descripcion = [];
                                    

                                    for (var i = 0; i < arrayArticulos.length; i++) {
                                        console.log(arrayArticulos[i].nombre)
                                        descripcion.push(arrayArticulos[i].nombre + " ");
                                        
                                    }
                                    
                                    console.log(arrayArticulos);
                                    console.log(descripcion);




                        return <tr>
                            
                            <td>{value._id}</td>
                            <td>{descripcion}</td>
                            <td>${value.total}</td>
                            <td>{DateCut}</td>

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