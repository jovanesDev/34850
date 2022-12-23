import React from 'react'

const Input = (props) => {
    const {type} = props;
  return (
    <>
     { type === 'text' && <input placeholder={type}  type={'text'} /> }
     { type === 'email' && <input placeholder={type}  type={'email'} /> }
     { type === 'number' && <input placeholder={type} type={'number'} /> }
     { type === 'password' && <input placeholder={type} type={'password'} /> }
     {!type && <h1>No hay type no se que mostrar </h1>}
    </>
  )
}

export default Input