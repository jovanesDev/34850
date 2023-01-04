import { useEffect } from 'react';
import useFirebase from './hook/useFirebase';

function App() {

  const {productos,getProducts} = useFirebase()

  useEffect(() => {
  
   getProducts()
    return () => {
      
    }
  }, [])
  

  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
