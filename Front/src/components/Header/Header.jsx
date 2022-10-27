import { Link } from 'react-router-dom';
import "./Header.css"


export const Header = ({size}) => {
  
  

  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className='nav-link active' to="/">Home</Link>

            </li>
            <li class="nav-item">
              <Link className='nav-link' to="/nuevo">Nuevo Producto</Link>

            </li>
            <li class="nav-item">
              <Link className='nav-link' to="/Total%20Productos">Total Productos</Link>

            </li>
            <li class="nav-item">
              <Link className='nav-link' to="/nuevo">Ventas Realizadas</Link>

            </li>

            
          </ul>
              
        </div>
      </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="cart">
                  
                      <li className="nav-item">
                              <Link className='nav-link' to="/CarroCompras"><box-icon name='cart'></box-icon></Link>
                      </li>
                      <span >{size}</span>
                  
                </div>
            <div>
                <li class="nav-item">
                  <Link className='nav-link' to="/nuevo">Login</Link>
                </li>
            </div>
        </ul>

    </nav>



  )
}