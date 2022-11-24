import logo from './logo.svg';
import './App.css';

function App() {

  let edad = 18

  // if(edad > 18) {
  //   console.log('eres mayor de edad')
  // }else if (edad === 18){
  //   console.log('justo tenes 18')
  // }else {
  //   console.log('eres menor de edad')
  // }

  // edad > 18 ? console.log('eres mayor') : edad === 18 ? console.log('justo tenes 18') : console.log('sos menor')

  // let edadPersona = 20 

  //let edadFinal =  edadPersona !== null ? edadPersona : 17 
  // let edadFinal =  edadPersona || 17 

  // // true || false => true 
  // // true || true  => true 
  // // false || true => true 
  // // false || false => false  
  //console.log(edadFinal)

  // let text = ""
  // let nombre = "" 

  // let finalText = ` Esto es lo que se va a imprimir ${texto} de lo cual el auto es ${nombre}`
  // let finalText = " Esto es lo que se va a imprimir " + texto + " de lo cual el auto es " + nombre 

  // let manzanas = 10 
  // let manzanasAgregadas = 5 

  // // let finalText = "Jorege tenia " + manzanas + " pero Luis le agrego " + manzanasAgregadas + "y ahora tiene un total de" + manzanas + manzanasAgregadas 

  // let finalText = ` Jorge tenia ${manzanas} manzanas y luis le agrego ${manzanasAgregadas} manzanas y ahora tiene ${(manzanas + manzanasAgregadas)}`
  // console.log(finalText)

  // //console.log( text + "juampi") => hola coder soy juampi  



  // let jugadorDeFutbol = {

  //   name:"Lionel",
  //   apellido:"Messi",
  //   soltero : false ,
  //   hijos : ["Thiago","Mateo","Ciro"]
  // }

  // const {soltero,hijos:[,,c],name,apellido} = jugadorDeFutbol

  // console.log(c)

  // const arr = [1,2,3,4] 

  // const resultado = arr.includes(-1)

  // console.log(resultado)

  // forEeach  =>  recorre  
  // map   =>  podes modificar cosas y retorna una nueva array 
  // find  => te devuelve el tipo de dato que encuentra y si no un objeto vacio 
  // filter  => reduce un array  y filtra , la respuesta esta en un arr  en el caso contrario []
  // indexOf => 1 -1
  // every  => booleano
  // some  => booleano 
  // reduce  => 

  let nombre = "Hovhannes"

  let styles = {
    color:'white',
    backgroundColor:'blue'
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={styles}> Mi nombre es { nombre }</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
