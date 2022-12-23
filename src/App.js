import React from 'react'
import Dynamic from './components/DynamicComponent/Dynamic';

function App() {

  const componentes = [
    {
      type:'input',
      atr:'text'
    },
    {
      type:'input',
      atr:'email'
    },
    {
      type:'input',
      atr:'number'
    },
    {
      type:'input',
      atr:'password'
    },
    {
      type:'button'
    },
    {
      type:'titulo',
      atr:{
        size:'h1',
        text:'Hola Mundo'
      }
    },
    {
      type:'titulo',
      atr:{
        size:'h2',
        text:'Hola Mundo'
      }
    },
    {
      type:'titulo',
      atr:{
        size:'h3',
        text:'Hola Mundo'
      }
    },
    {
      type:'titulo',
      atr:{
        size:'h4',
        text:'Hola Mundo'
      }
    },
    {
      type:'titulo',
      atr:{
        size:'h5',
        text:'Hola Mundo'
      }
    },
    {
      type:'titulo',
      atr:{
        size:'h6',
        text:'Hola Mundo'
      }
    },
    {}
  ]

  return (
    <div>
     {componentes.map((componente) => (
      <>
      <Dynamic component={componente}/>
      <br/>
      </>
     ))}
    </div>
  );
}

export default App;
