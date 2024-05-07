import React from 'react'
import { useState, useEffect } from 'react';
import '../header/header.css';
import user from '../registro-usuario.json'
import Cookies from 'universal-cookie';
import './usuario.css';
import SesionExpirada from '../login/sesionExpirada';





function UsuarioRegistrado() {

    const cookie = new Cookies();
    const nombre = cookie.get('nombre');
    const apellido = cookie.get('apellido');
    const email = cookie.get('email');
    
    function cerrarSesion() {


        cookie.remove('apellido');
        cookie.remove('nombre');
        cookie.remove('email');
        window.location.href = '/';

    }

    return (    
        
        <div>
            <div className='contentUsuario'>
                <p className='usuarioRegistrado' >Bienvenido {nombre}   {apellido}</p>
                <p className='usuarioRegistrado' > {email} </p>
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
            <SesionExpirada/>
        </div>
    )
}

export default UsuarioRegistrado
