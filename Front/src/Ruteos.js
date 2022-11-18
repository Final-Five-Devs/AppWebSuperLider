
import { Route,Routes } from "react-router-dom";
import { AddProducto } from "./components/AddProducto/AddProducto";
import {UpdProducto} from "./components/UpdProducto/UpdProducto"
import { Inicio } from "./components/Inicio/Inicio";
import CarroCompras from './components/CarroCompras/CarroCompras';
import { TotalProductos } from "./components/TotalProductos/TotalProductos";
import { Dashboard } from "./components/admin/Dashboard";
import { VentasRealizadas } from "./components/VentasRealizadas/VentasRealizadas";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";


export const Ruteos =({ cart, setCart, handleChange,handleClick }) =>{

    return(
        
        <Routes>
                <Route path="/" element={<Inicio handleClick={handleClick}/>}></Route>

                <Route path="/admin/dasboard" element={<Dashboard />}/>

                <Route path="/admin/dasboard/nuevo" element={<AddProducto/>}></Route>

                <Route path="/admin/dasboard/actualizar" element={<UpdProducto/>}></Route>

                <Route path="/admin/dasboard/Total%20Productos" element={<TotalProductos></TotalProductos>}></Route>
                
                <Route Route path = "/admin/dasboard/VentasRealizadas"
                element = {<VentasRealizadas></VentasRealizadas>}></Route >
                
                <Route path="/CarroCompras" element={<CarroCompras cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
                
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/reset" element={ <Reset/>} />
                <Route exact path="/dashboard" element={<Dashboard/>} />     
               
         </Routes>

    )

}