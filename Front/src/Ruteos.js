
import { Route,Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/Inicio/Inicio"

import CarroCompras from './components/CarroCompras/CarroCompras'
import { TotalProductos } from "./components/TotalProductos/TotalProductos";
import { Dashboard } from "./components/admin/Dashboard";

export const Ruteos =({ cart, setCart, handleChange,handleClick }) =>{
    

    return(
        
        <Routes>
                <Route path="/" element={<Inicio handleClick={handleClick}/>}></Route>
                <Route path="/admin/dasboard" element={<Dashboard />}/>
                <Route path="/admin/dasboard/nuevo" element={<AddProducto/>}></Route>
                <Route path="/admin/dasboard/Total%20Productos" element={<TotalProductos></TotalProductos>}></Route>
                
                <Route path="/CarroCompras" element={<CarroCompras cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>

                
        </Routes>



    )


}