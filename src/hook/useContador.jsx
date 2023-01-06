import { useState } from 'react'


const useContador = () => {

 const [contador, setContador] = useState(0);

 const sumar = () => setContador(contador + 1)

 const restar = () => setContador( contador - 1 )

 const reset = () => setContador(0)


  return {
    contador,
    sumar,
    restar,
    reset
  }
}

export default useContador