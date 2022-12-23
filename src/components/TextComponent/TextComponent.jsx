import React from "react";

const TextComponent = (props) => {
  const { text, size } = props;

  return (
    <>
      {size === "h1" && <h1 className={`${size==='h1' || text === 'Hola Mundo ' ? 'btn-primary' : 'btn-secondary'}`}>{text}</h1>}
      {size === "h2" && <h2>{text}</h2>}
      {size === "h3" && <h3>{text}</h3>}
      {size === "h4" && <h4>{text}</h4>}
      {size === "h5" && <h5>{text}</h5>}
      {size === "h6" && <h6>{text}</h6>}
    </>
  );
};

export default TextComponent;
