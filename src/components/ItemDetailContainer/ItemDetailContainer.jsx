import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id,name} = useParams()

  return (
    <h1>Se Cargo el componente con el id  {id} con el nombre {name}</h1>
  )
}

export default ItemDetailContainer