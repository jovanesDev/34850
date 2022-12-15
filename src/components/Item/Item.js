import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, id } = props;

  return (
    <Link style={{textDecoration:'none',color:'black'}} to={`/item/detail/${id}/${name}`}>
      <div
        style={{
          margin: "10px 0",
          border: "1px solid black",
          cursor: "pointer",
        }}
      >
        <h1>{name}</h1>
        <h4>{id}</h4>
      </div>
    </Link>
  );
};

export default Item;
