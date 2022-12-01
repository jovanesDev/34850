
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carusel from "./components/Carusel/Carusel";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import Counter from "./components/Counter/Counter";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)


  // let styles = {
  //   color: "white",
  //   backgroundColor: "blue",
  // };

  // const cards = [
  //   {
  //     titulo: "Hola Soy Componente",
  //     descripcion:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, itaque quod numquam consequatur similique",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg/1200px-Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg",
  //     btnText: "Ver Mas",
  //     btnClassName: "btn btn-danger fs-1",
  //   },
  //   {
  //     titulo: "Componente de Jazmin",
  //     descripcion: "Bla bla bla bla",
  //     img: "https://www.rionegro.com.ar/wp-content/uploads/2021/10/Imagen-gardenia-flor-jazmin-del-cabo.jpg?w=1024",
  //     btnText: "Eliminar",
  //   },
  //   {
  //     titulo: "Componente de Rosa",
  //     descripcion: "Bla bla bla bla",
  //     img: "https://www.rionegro.com.ar/wp-content/uploads/2021/10/Imagen-gardenia-flor-jazmin-del-cabo.jpg?w=1024",
  //     btnText: "Eliminar",
  //   },
  // ];



  return (
    <div>
      <Main>
        {/* <Carusel /> */}
        { show ?  <Counter /> : null}
          {/* <Counter />
          <Counter /> */}


        <button onClick={toggle} >{show ? " Ocultar" : "Mostrar"}</button>

        <div className="d-flex">
         
          {/* {cards.map(
            ({ titulo, descripcion, img, btnText, btnClassName }, index) => (
              <Card
                key={index}
                titulo={titulo}
                descripcion={descripcion}
                img={img}
                btnText={btnText}
                btnClassName={btnClassName}
                Fiufiu={Navbar}
              />
            )
          )} */}
        </div>
      </Main>

      {/* <Card 
        titulo={"Hola Soy Componente"}
        descripcion={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, itaque quod numquam consequatur similique"}
        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg/1200px-Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg"}
        btnText={"Ver Mas"}
        btnClassName="btn btn-danger fs-1"
      />
        <Card 
        titulo={"Componente de Jazmin"}
        descripcion={"Bla bla bla bla"}
        img={"https://www.rionegro.com.ar/wp-content/uploads/2021/10/Imagen-gardenia-flor-jazmin-del-cabo.jpg?w=1024"}
        btnText={"Eliminar"}
      /> */}
    </div>
  );
}

export default App;

//https://www.rionegro.com.ar/wp-content/uploads/2021/10/Imagen-gardenia-flor-jazmin-del-cabo.jpg?w=1024
