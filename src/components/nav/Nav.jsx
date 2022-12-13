import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='header_container'>
      <Link to="/"><img className='logo_Link' src="" alt="infoWay" /></Link>
      <Link className='nav_container'>
        <Link className='about_link' to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="client">Clients</Link>
        <Link to="contact">Contact Us</Link>
      </Link>
    </div>
  )
}

export default Nav
