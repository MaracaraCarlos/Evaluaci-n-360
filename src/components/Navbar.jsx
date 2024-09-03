import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/360.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo_container'>
        <img src={logo} alt='logo' />
      </div>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/perfil'>Perfil</Link></li>
        <li><Link to='/formulario'>Formulario</Link></li>
        <li><Link to='/resultados'>Resultados</Link></li>
        <li><Link to='/administracion'>Administración</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
