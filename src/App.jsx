import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Formulario from './components/Formulario'
import Inicio from './components/Inicio'
import Dashboard from './components/Dashboard'
import Perfil from './components/Perfil'
import Resultados from './components/Resultados'
import Administracion from './components/Administracion'
import Navbar from './components/Navbar'
import './styles/App.css'
import { PersonsProvider } from './context/PersonsContext'

function App () {
  return (
    <>
      <PersonsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/resultados' element={<Resultados />} />
            <Route path='/administracion' element={<Administracion />} />
          </Routes>
        </BrowserRouter>
      </PersonsProvider>
    </>
  )
}

export default App
