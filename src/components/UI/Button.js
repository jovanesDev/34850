import React from 'react'

const Button = (props) => {
    const {btnClassName,btnText} = props
  return (
    <button className={ btnClassName || "btn btn-primary" }>{btnText}</button>
  )
}

export default Button