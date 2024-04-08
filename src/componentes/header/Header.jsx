import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'


function Header() {
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


                                <li className="nav-item">
                                    <a className="nav-link active" href="#" >Iniciasr sesión</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
