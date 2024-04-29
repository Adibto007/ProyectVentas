import React from 'react'
import { useState, useEffect } from 'react';
import '../header/header.css';
import user from '../registro-usuario.json'


function UsuarioRegistrado() {

    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        setUserData(user[0]);
    })
    
    function cerrarSesion() {
        window.location.href = '/';
    }

    return (
        
        <div>
            <div className="userData">
                {userData && (
                    <div className="userDetails">
                        <p><span className="label">Nombre:</span> {userData.nombre} {userData.apellido}</p>
                    </div>
                )}
            </div>
            <div className='contenedor'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <img src='logo.png' className='logo' alt="logo" />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="logo.png">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Tutoriales</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active " href="#" >Referencias</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#" >Recursos</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#" >Contacto</a>
                                </li>


                                
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="button" onClick={cerrarSesion}>Cerrar sesion</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default UsuarioRegistrado
