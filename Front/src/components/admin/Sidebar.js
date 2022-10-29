import React from "react";
import { Link } from "react-router-dom";

export const Sidebar=()=>{
    return(
      
            
        
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item">
                      <Link className='nav-link' to="/">Home</Link>
        
                    </li>

                    <li class="nav-item">
                      <Link className='nav-link ' to="/admin/dasboard/nuevo">Nuevo Producto</Link>
                    </li>
                    
                    <li class="nav-item">
                      <Link className='nav-link' to="/admin/dasboard/Total%20Productos">Total Productos</Link>
        
                    </li>
                    <li class="nav-item">
                      <Link className='nav-link' to="/admin/dasboard/nuevo">Ventas Realizadas</Link>
        
                    </li>


                    
                  </ul>
                      
                </div>
              </div>

        
            </nav>
        
      
        
          )
        }
export default Sidebar