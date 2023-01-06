import React from 'react'
import useFirebase from '../hook/useFirebase'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ItemListContainer = () => {

    const {productos} = useFirebase()  
    
  return (
    <div>
        <h1>ItemListContainer</h1>

        {productos.map(({id, nombre}) => (
            <Link key={id} to={`/itemDetail/${id}`}>
                <h1>{nombre}</h1>
            </Link>
        ))}
    </div>
  )
}

export default ItemListContainer