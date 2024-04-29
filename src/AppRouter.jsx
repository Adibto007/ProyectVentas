
import Registro from "./componentes/registro/Registro.jsx";
import LoginUser from "./componentes/login/loginUser.jsx";
import UsuarioRegistrado from "./componentes/usuariosRegistrados/usuarios.jsx";
import Inicio from "./app.jsx"
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {
    return (

        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Inicio/>} />
                <Route exact path="/registro" element={<Registro />} />
                <Route exact path="/login" element={<LoginUser />} />
                <Route exact path="/usuarioRegistrado" element={<UsuarioRegistrado />} />
            </Routes>
        </HashRouter>


    )
}

export default App;