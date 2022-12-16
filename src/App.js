import { useState } from "react"

function App() {

  const [state, setState]= useState('')
  const vocales = ['a','e','i','o','u']

  const handleClick = (evnt) => {
    console.clear()
    console.log(evnt)
  } 

  const handleSubmit = (e) =>  {

    e.preventDefault();

    console.log("se ejecuto el handleSubmit")
  }

  const handleKeyDown = (e) => {

    const {key} = e

      if(!vocales.includes(key.toLowerCase())){
        setState(key)
      }

  }

  return (
    <>
    <div>
        <h1>Hola Mundo ! </h1>
        <form onSubmit={handleSubmit} action="">
          <input value={state} onKeyDown={handleKeyDown} type="text"/>
          <button type="submit">Guardar el Form </button>
        </form>
        <button onClick={handleClick}>Clickea me</button>
    </div>
    <div>
      
    </div>
    </>

  );
}

export default App;
