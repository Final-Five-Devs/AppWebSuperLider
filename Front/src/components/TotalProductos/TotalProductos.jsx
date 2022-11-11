import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export const TotalProductos = () => {

  const [Lista, setLista] = useState([])

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
 

  function borrarPorId (id){
    // DELETE request using fetch inside useEffect React hook
    fetch('/api/producto/'+id, { method: 'DELETE' })
     

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}





  return (
    <>

      <div className='col-12 col-md-4'>
        <button type="button" class="btn btn-outline-secondary">
          <Link className='nav-link' to="/admin/dasboard">Volver</Link>
        </button>
      </div>
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

              <td >{index + 1}</td>
              <td>{value.nombre}</td>
              <td>{value.descripcion}</td>
              <td>{value.inventario}</td>
              <td>$ {value.precio}</td>
              <td>
                <img src={value.imagen} width="60" HEIGHT="60" alt="" />

              </td>

              <td><button type="button" class="btn btn-primary" onClick={()=>borrarPorId(value._id)}>Eliminar</button></td>

            </tr>
          })
          }
        </tbody>
      </Table>
    </>

  )

}
