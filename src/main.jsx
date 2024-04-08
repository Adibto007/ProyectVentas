import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import Header from './componentes/header/Header'
import Carrusel from './componentes/carrusel/carrusel'
import CardList from './componentes/body/CardList'
import Footer from './componentes/footer/footer'
import Registro from './componentes/registro/Registro.jsx'
import App from './app'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>,
)
