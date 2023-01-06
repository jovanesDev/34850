import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFirebase from '../hook/useFirebase'

const ItemDetail = () => {


    

    const {id} = useParams()
    const {producto,getProduct,guardarNuevoProducto,generateTicket} = useFirebase()
    const navigate = useNavigate()

    const order = {
        nombre:'Hovha',
        apellido:'Petrosyan',
        email:'profe@profe.com',
        items:[
            {
                stock: 20,
                imagen: "https://http2.mlstatic.com/D_NQ_NP_671928-MLA42256921850_062020-O.webp",
                modelo: "JA111",
                categoria: "hombre",
                nombre: "jaguar",
                precio: 20000,
                cantidad:3
            }
        ]
    }

    console.log(producto)

    useEffect(() => {
      
        getProduct(id)

        if(producto){
            console.log(producto)
        }
    
      return () => {
        
      }
    }, [])



    const productoGuardar = {
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_671928-MLA42256921850_062020-O.webp",
        modelo: "JA111",
        categoria: "hombre",
        nombre: "jaguar",
        precio: 20000
    }
    


  return (
    <div>
        {producto ? (
            <>
                <h1>{producto.nombre}</h1>
                <img src={producto.imagen} alt="" />
                <p>Stock : {producto.stock}</p>
                <h4>Precio :{producto.precio}</h4>
                <button onClick={() => navigate(-1)}>Volver</button>
                <button onClick={()=> generateTicket(order)}>Comprar</button>
                <button onClick={()=>guardarNuevoProducto(productoGuardar)}>Agregrar Producto</button>
            </>
        ): <h1>Cargando...</h1>}
    </div>
  )
}

export default ItemDetail