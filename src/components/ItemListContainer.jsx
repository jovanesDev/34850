import { useContext } from 'react';
import Item from './Item';
import { CarritoContext } from '../context/CarritoContext';


const ItemListContainer = () => {
  const {productos} = useContext(CarritoContext)
  return (
    <div>
      {productos.map((item,index) => (
        <Item item={item} key={index}/>
      ))}
    </div>
  )
}

export default ItemListContainer