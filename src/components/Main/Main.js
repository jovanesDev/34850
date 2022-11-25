import React from 'react'
import Carusel from '../Carusel/Carusel'
import Navbar from '../Navbar/Navbar'

const Main = (props) => {

 const {children} = props
  return (
    <main>
      <Navbar/>
      {children}
      <h1>Yo soy el Footer </h1>
    </main>
  )
}

export default Main