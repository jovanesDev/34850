import React, { useState,memo } from "react";

const Button = memo(() => {

    const [show, setShow] = useState(false)

    const handleToggle = () => setShow(!show)

  return (
    <button
      style={{
        background: show ? "red" : "green",
        width: "200px",
        height: "200px",
        fontSize: "40px",
      }}
      onClick={handleToggle}
    >
      {show ? "Cerrar" : "Abrir"}
    </button>
  );
});

export default Button;
