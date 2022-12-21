import React,{useContext} from 'react'
import  {CarritoContext}  from '../context/CarritoContext'

const Navbar = () => {

    const {carrito} = useContext(CarritoContext)

  return (
    <div> 
        <h1>carrito</h1>
        <span>iconito de carrito {carrito.length}</span>
    </div>
  )
}

export default Navbar