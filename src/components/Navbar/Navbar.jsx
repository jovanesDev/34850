import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'


const Navbar = () => {
  return (
    <ul className='navlink_container'>
        <li>
            <NavLink  className={'navlink'} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink  className={'navlink'} to="/checkout">Checkout</NavLink>
        </li>
        <li>
            <NavLink  className={'navlink'} to="/cart" >Cart</NavLink>
        </li>
    </ul>
  )
}

export default Navbar