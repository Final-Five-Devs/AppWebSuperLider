import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "../../firebase";

import '../Header/Header.css'

import "./Header.css"

export const Header = ({size}) => {
  const [user, loading, error] = useAuthState(auth);

  const testConectBack = ( ) => {
    fetch('/api/productos')
    .then((response) => response.json())
   .then((data) => {
    console.log('LOS DATOS TRAIDOS DEL BACK SON:')
    console.log(data)});

}

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
          <Link to="/" ><img src="./Logo_Super_PNG.png" alt="SuperMarket" width={200} height={200}></img></Link>          
            </div>
          </div>
          </div>

            {/*Home
            <li class="nav-item">
              <Link className='nav-link active' to="/">Home</Link>
            </li>  */}

          <div className='col-12 col-md-15'>
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
                              <Link className='nav-link' to="/CarroCompras"><box-icon name='cart'></box-icon>
                              <span >{size}</span>
                              </Link>
                      </li>
                      
                </div>

                <div className="col-12 col-md-3 mt-2 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Mi cuenta</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                          {
                            user ? <Link className="dropdown-item" to="/admin/dasboard">Adm. Productos</Link> : ''
                          }
                            
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/login">Mi cuenta</Link>
                          {
                            user ?  <Link className="dropdown-item" to="/" onClick={() => logout()}>Cerrar Sesion</Link> : ''
                          }
                          
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