import React from 'react'
import './Navbar.css'
import logo from '../Img/Logo.png'
import HomeIcon from '../HomeIcon.jsx'


const Navbar = () => {


  return (
    <nav>
      <a href="https://borgesmj.github.io/"><HomeIcon/></a>
      <input type="checkbox" name="" id="navCheck" />
      <ul>
        <li><a className='navlink' href="https://borgesmj.github.io/remesas">Envío de Remesas</a></li>
        <li><a className='navlink' href="">Tienda Virtual</a></li>
        <li><a className='navlink' href="">Cursos Digitales</a></li>
        <li><a className='navlink' href="">Blog</a></li>
      </ul>
      <label htmlFor="navCheck">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </nav>
  )
}

export default Navbar
