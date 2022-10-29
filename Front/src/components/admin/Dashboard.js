import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


export const Dashboard = () => {
    return (

        <div className="row">
            <div className="col-12 col-md-12">
                <Sidebar />
            </div>


            <Fragment>

                <div className="col-12 col-md-12">
                    <h1 className='my-4'><br />Panel de control<br /></h1>
                    <div className="row pr-10">


                        {/*Tarjeta 1*/}


                        <div className="col-xl-12 col-sm-6 mb-3">
                            < div className="card text-white bg-primary o-hidden h-100">
                                <div className="card-body">
                                    <div className="text-center card-font-size"><br />Ventas totales<br /><b>$0.0</b></div>
                                </div>
                            </div>
                        </div>


                        {/*Tarjeta 2*/}

                        <div className="col-xl-3 col-sm-6 mb-3">
                            < div className="card text-white bg-success o-hidden h-100">
                                <div className="card-body">
                                    <div className="text-center card-font-size">Lista ventas<br /><b>250</b></div>
                                </div>
                                <Link className="card-footer text-white clearfix small z-1" to="/pendiente">
                                    <span className="float-left">Ver detalles</span>
                                </Link>
                            </div>
                        </div>


                        {/*Tarjeta 3*/}

                        <div className="col-xl-3 col-sm-6 mb-3">
                            < div className="card text-white bg-info o-hidden h-100">
                                <div className="card-body">
                                    <div className="text-center card-font-size">Pedidos<br /><b>80</b></div>
                                </div>
                                <Link className="card-footer text-white clearfix small z-1" to="/pendiente">
                                    <span className="float-left">Ver detalles</span>
                                </Link>
                            </div>
                        </div>


                        {/*Tarjeta 4*/}


                        <div className="col-xl-3 col-sm-6 mb-3">
                            < div className="card text-white bg-warning o-hidden h-100">
                                <div className="card-body">
                                    <div className="text-center card-font-size">Usuarios<br /><b>100</b></div>
                                </div>
                                <Link className="card-footer text-white clearfix small z-1" to="/pendiente">
                                    <span className="float-left">Ver detalles</span>
                                </Link>
                            </div>
                        </div>
                    

                    {/*Tarjeta 5*/}


                    <div className="col-xl-3 col-sm-6 mb-3">
                        < div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Agotados<br/><b>100</b></div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                    
                </Fragment >
           
                </div >
    )
}