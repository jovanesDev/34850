import React,{createContext, useState} from 'react'


export const CarritoContext = createContext('');


const CarritoContextProvider = ({children}) => {
    const productos = [
        {
              nombre:'botas',
              marca: 'nike',
              modelo:'airmax 90',
              stock: 5
          },
          {
            nombre:'botas',
            marca: 'adidas',
            modelo:'nemisis',
            stock: 3
        }
      ]

      const [carrito , setCarrito] = useState([]);

      const addCarrito = (producto) => {
        setCarrito([...carrito,producto])
      }


  return (
    <CarritoContext.Provider value={{productos,carrito,addCarrito}}>
       {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider