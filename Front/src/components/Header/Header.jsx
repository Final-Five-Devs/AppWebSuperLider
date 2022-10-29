import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"



export const Header = ({size}) => {
  
  

  return (
    <Fragment>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <div className='navbar row'>
            <div className='col-12 col-md-2'>
            <div className='navbar-brand'>
          <Link to="/" ><img src="./imagen" alt="SuperMarket"></img></Link>
            </div>
          </div>
          </div>


            {/*Home
            <li class="nav-item">
              <Link className='nav-link active' to="/">Home</Link>
            </li>  */}

          <div className='col-12 col-md-10'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='¿Qué producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

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

                <div className="col-12 col-md-3 mt-2 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Mi cuenta</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/admin/dasboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>
                    </div>
              
          {/*    <div>
                <li class="nav-item">
                <Link className='nav-link' to="/nuevo">Login</Link>
                </li>
            </div> */}
        </ul>

    </nav>

    </Fragment>

  )
}