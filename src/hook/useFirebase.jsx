
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const useFirebase = () => {

    const [productos,setProductos] = useState([])

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


  return {productos,getProducts}
}

export default useFirebase