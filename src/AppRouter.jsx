
import Registro from "./componentes/registro/Registro.jsx";
import LoginUser from "./componentes/login/loginUser.jsx";
import UsuarioRegistrado from "./componentes/usuariosRegistrados/usuarios.jsx";
import Inicio from "./app.jsx"
import { Routes, Route, HashRouter } from "react-router-dom";
import DataProvider from "./componentes/context/DataContext.jsx";
import CarritoVacio from "./componentes/carrito/CarritoVacio.jsx";
import CarritoElements from "./componentes/carrito/CarritoElements.jsx";


function App() {
    return (
        <DataProvider>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Inicio/>} />
                    <Route exact path="/registro" element={<Registro />} />
                    <Route exact path="/login" element={<LoginUser />} />
                    <Route exact path="/usuarioRegistrado" element={<UsuarioRegistrado />} />
                    <Route exact path='/Carrito' element={<CarritoElements />} />
                    <Route exact path='/Carrito-vacio' element={<CarritoVacio />} />
                </Routes>
            </HashRouter>
        </DataProvider>


    )
}

export default App;