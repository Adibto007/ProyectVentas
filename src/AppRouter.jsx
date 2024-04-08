
import Registro from "./componentes/registro/Registro.jsx";
import Inicio from "./app.jsx"
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {
    return (

        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Inicio/>} />
                <Route exact path="/registro" element={<Registro />} />
            </Routes>
        </HashRouter>


    )
}

export default App;