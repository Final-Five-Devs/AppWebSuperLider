import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Sidebar from '../admin/Sidebar';
import '../VentasRealizadas/VentasRealizadas.css'

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

 
  //console.log(Lista)
                      
    return (
        <>
        <Sidebar></Sidebar>
        <h1>Ventas Realizadas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código venta</th>
                        <th>Productos vendidos</th>
                        <th>Cantidad total de productos</th>
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

                                    var productosVendidos = [];
                                    var cantidadProductosVendidos = 0;
                                    
                                    for (var i = 0; i < arrayArticulos.length; i++) {
                                        productosVendidos.push(arrayArticulos[i].nombre + " Und: "+arrayArticulos[i].inventarioResta+" ,");
                                        cantidadProductosVendidos += arrayArticulos[i].inventarioResta;                                        
                                    }                                    

                            return <tr>                            
                                <td id='tdID'>{value._id}</td>
                                <td id='tdProVen'>{productosVendidos}</td>
                                <td id='tdCantProVen'>{cantidadProductosVendidos}</td>
                                <td>${value.total}</td>
                                <td>{DateCut}</td>

                            </tr>
                        })
                    }
                </tbody>
            </Table>

           
        </>
    )
}