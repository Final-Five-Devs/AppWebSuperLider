import React from "react";
import { Link } from "react-router-dom";

export const Sidebar=()=>{
    return(
      
            
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                      <Link className='nav-link' to="/">Home</Link>
        
                    </li>

                    <li className="nav-item">
                      <Link className='nav-link ' to="/admin/dasboard/nuevo">Nuevo Producto</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className='nav-link' to="/admin/dasboard/Total%20Productos">Total Productos</Link>
        
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/admin/dasboard/VentasRealizadas">Ventas Realizadas</Link>
        
                    </li>


                    
                  </ul>
                      
                </div>
              </div>

        
            </nav>
        
      
        
          )
        }
export default Sidebar