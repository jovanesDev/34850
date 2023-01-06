
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'

const useFirebase = () => {

const [productos,setProductos] = useState([]);
const [producto,setProducto] = useState(null);

// 15 min brake => volvemos y 20 y 40hs 

useEffect(() => {

getProducts()
    return () => {
    
    }
}, [])



useEffect(() => {

}, [productos])


const getProducts =  async () => {

    try {
        const prodCol = collection(db,'productos')
        await getDocs(prodCol).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('base de datos esta vacio')
            }
            setProductos(snapshot.docs.map((doc) =>  {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            }))
        })
    } catch (error) {
        
    }
}

const getProduct =  async (id) => {
    //setLoading(true)
    try {
        const document = doc(db,"productos",id)
        const response = await getDoc(document)
        //let result =response.data()
        setProducto({id:response.id,...response.data()})

    } catch (error) {
        console.log(error)
    }
  };

  const generateTicket =  async (orden) => {
    try {
        const col = collection(db,"ordenes")
        const order =  await addDoc(col,orden)
        console.log(order.id)
    } catch (error) {
        console.log(error)
    }
  };

// 

const guardarNuevoProducto =  async (producto) => {
    try {
        const col = collection(db,"productos")
        const order =  await addDoc(col,producto)
        console.log(order.id)
    } catch (error) {
        console.log(error)
    }
  };



// Para actualizar deberias utilizar updateDoc 
//   const fetchUpdateDoc = async ({id}) => {
//     const orderDoc = doc(db,"games",id);
//     try {
//       await updateDoc(orderDoc,{precio:8000})
//       console.log("se actualizo correctamente")
//     } catch (error) {
//       console.log(error)
//     }
//   }


  return {
    productos,
    producto,
    getProducts,
    getProduct,
    guardarNuevoProducto,
    generateTicket
}
}

export default useFirebase