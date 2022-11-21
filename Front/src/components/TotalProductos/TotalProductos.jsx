import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UpdProducto } from '../UpdProducto/UpdProducto';
import Modal from '../Modal/Modal';
import { UseModal } from '../Modal/UseModal';




export const TotalProductos = () => {

  const [isOpenUpdProducto, openUpdProducto, closeUpdProducto] = UseModal(false);
  const [Lista, setLista] = useState([])
  const [array,setArray]=useState([])
 


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
 


  const borrarPorId = (id) => {
    const response =
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
          fetch('/api/producto/' + id, { method: 'DELETE' })
            .then(response => response.json())
            .then(json => {
              if (json.success == true) {
                Swal.fire(
                  'Eliminado!',
                  'Su producto ha sido eliminado.',
                  'Hecho')
                setLista([]);
                console.log(json);
              }
            })
            .catch(err => console.log(err));

        }
      })
  }


  function actualizarProducto (id){

    const arr=Lista.filter((item) => item._id == id)
    const arrProductos=arr[0];
    setArray(arrProductos);
    openUpdProducto();
   
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
            //console.log(test(value._id))
            //console.log("depues  va value")
            //console.log(value)

            return <tr>

              <td >{index + 1}</td>
              <td>{value.nombre}</td>
              <td>{value.descripcion}</td>
              <td>{value.inventario}</td>
              <td>$ {value.precio}</td>
              <td>
                <img src={value.imagen} width="60" HEIGHT="60" alt="" />

              </td>

              <td><button type="button" class="btn btn-primary" onClick={() => borrarPorId(value._id)}>Eliminar</button></td>

              <td>
                <button ype="button" class="btn btn-secondary" onClick={() => actualizarProducto(value._id)}>Actualizar</button>

                <Modal isOpen={isOpenUpdProducto} closeModal={closeUpdProducto}>
                  <UpdProducto item={array}></UpdProducto>
                </Modal>
               
              </td>
             
            </tr>
          })
          }
        </tbody>
      </Table>
    </>

  )

}
