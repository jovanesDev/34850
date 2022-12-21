import React from 'react'
import ItemCount from './ItemCount';


const Item = (props) => {
    const {item} = props;
    const {nombre,marca,modelo,stock} = item
    
  return (
    <div>
        <h1>ITEM</h1>
        <h4>Nombre : {nombre}</h4>
        <h4>Marca : {marca}</h4>
        <h4>Modelo :{modelo}</h4>
        <h4>Stock : {stock}</h4>
        <ItemCount 
            initialValue={1} 
            item={item}  
        />
    </div>
  )
}

export default Item