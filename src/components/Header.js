import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header