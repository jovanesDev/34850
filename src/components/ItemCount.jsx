import React, { useContext } from 'react'
import { useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const ItemCount = (props) => {

    const { initialValue , item } = props;
    const {addCarrito} = useContext(CarritoContext)

    const [count, setCount] = useState(initialValue);
    const {stock} =  item

    const sumar = () => {

        if(count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {

        if( count > 1) {
            setCount(count - 1)
        }
    }

    const producto = {
      ...item,
      cantidad:count
    }



  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h1>{count}</h1>
        <button onClick={restar}>Restar</button>
        <br/>
        <button onClick={() => addCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount