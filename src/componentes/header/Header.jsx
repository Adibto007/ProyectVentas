import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../context/DataContext';
import { FaShoppingCart } from 'react-icons/fa';
import './header.css'


function Header() {

    const { cantidadElementosUnicos } = useContext(dataContext);

    return (
        <div>

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


                                <Link to='/registro'>
                                    <li className="nav-item">
                                        <a className="nav-link active"  >Registrarse</a>
                                    </li>
                                </Link>

                                <Link to='/login'>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" >Iniciasr sesión</a>
                                </li>
                                </Link>
                            </ul>
                            
                        </div>
                        <div className="cart-container">
                            <Link to="/Carrito" className="cart-link">
                                <FaShoppingCart size={34} />
                                {cantidadElementosUnicos > 0 && (
                                    <span className="cart-count">{cantidadElementosUnicos}</span>
                                )}
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
