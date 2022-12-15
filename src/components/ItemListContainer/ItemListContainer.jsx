import React from 'react'
import Item from '../Item/Item'

const ItemListContainer = () => {

    const items = [
        {
            id:1,
            name:'Uno'
        },
        {
            id:2,
            name:'Dos'
        },
        {
            id:3,
            name:'Tres'
        }
    ]



  return (
    <>
        {items.map(({id,name}) => (
            <Item key={id} id={id} name={name}/>
        ))}
    </>
  )
}

export default ItemListContainer