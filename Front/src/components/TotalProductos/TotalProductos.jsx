import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import '../TotalProductos/TotalProductos.css'

export const TotalProductos = () => {

  const [Lista, setLista] = useState([])
  const [ListaActualizar, setListaActualizar] = useState([])

  useEffect(() => {
    if (Lista == "") {
      fetch('/api/productos')
        .then((response) => response.json())
        .then((data) => {

          let { productos } = data


          setLista([...productos])

        }, []);

    }
  }
  )
  //console.log(Lista)

  const borrarPorId  = (id) => {
    const response= 

    Swal.fire({
      title: '¿Está seguro que desea eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar!'
    }).then((response) => {
      if (response.isConfirmed) {

    // DELETE request using fetch inside useEffect React hook
    fetch('/api/producto/'+id, { method: 'DELETE' })
    .then(response => response.json()) 
    .then(json => {if(json.success==true){
      Swal.fire(
        'Eliminado!',
        'Su producto ha sido eliminado.',
        'Hecho')
      setLista([]);
      console.log(json);
     }})
    .catch(err => console.log(err)); 
      }
    })
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}

const actualizarPorId  = (id) => {
  
  const arreglo=Lista.filter((item) => item._id === id);
   setListaActualizar(arreglo);
   console.log(arreglo);
 };

  return (
    <><>

      <h1>Lista de Productos</h1>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>Item</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Unidades Disponibles</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>

        <tbody>

          {Lista.map((value, index) => {
            return <tr>

              <td>{index + 1}</td>
              <td>{value.nombre}</td>
              <td>{value.descripcion}</td>
              <td>{value.inventario}</td>
              <td>$ {value.precio}</td>
              <td>
                <img src={value.imagen} width="60" HEIGHT="60" alt="" />

              </td>

              <td><button type="button" class="btn btn-primary" onClick={() => borrarPorId(value._id)}>Eliminar</button></td>
              <td><button type="button" class="btn btn-secondary" onClick={() => actualizarPorId(value._id)}> <Link className='nav-link ' to="/admin/dasboard/actualizar">Actualizar</Link></button></td>
            </tr>;
          })}
        </tbody>
      </Table>
    </><div className='col-12 col-md-4'>
        <button button type = "button"
        class = "btn btn-outline-secondary"
        id = 'btnVolverTotalProductos' >
          <Link className='nav-link' to="/admin/dasboard">Volver</Link>
        </button>
      </div></>

  )

}
