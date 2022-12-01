import React from "react";
import Button from "../UI/Button";

const Card = (props) => {

  // ->  booleano, number, string, object ,array
  // ->  funciones ? 

  // console.log("props",props )

  const { titulo, descripcion,img,btnText,btnClassName,} = props; // es un objeto

  return (
    <div className="card" style={{width:"18rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <Button btnText={btnText} btnClassName={btnClassName} />
      </div>
    </div>
  );
};

export default Card;
