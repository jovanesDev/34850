// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Carusel from "./components/Carusel/Carusel";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import Counter from "./components/Counter/Counter";
import { useState, useEffect } from "react";
import config from "./config.json";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [show, setShow] = useState(true);
  const toggle = () => setShow(!show);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // let styles = {
  //   color: "white",
  //   backgroundColor: "blue",
  // };

  // ESTADO DE PROMESAS

  // PENDING || PENDIENTE =>

  // FULLFILLED => COMPLETADA || EXITOSO

  // REJECTED => RECHAZADA !

  const getCards = () => {
    setLoading(true);
    const operacion = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({
          status: 200,
          data: config.cards,
        });
        //  reject("algo salio mal")
      }, 4000);
    });

    operacion
      .then((resultado) => {
        // resultado un objeto ,  status y data
        setCards(resultado.data);
        console.log(resultado);
      })
      .catch((err) => {
        console.log(err, "ERROR EN EL CATCH");
        alert("Algo Fallo");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCards();
    return () => {
      setCards([]);
    };
  }, []);

  return (
    <div>
      <Main>
        {loading && <Spinner />}

        <div className="d-flex justify-content-center">
          {!loading && cards.length > 0
            ? cards.map(
                (
                  { titulo, descripcion, img, btnText, btnClassName },
                  index
                ) => (
                  <Card
                    key={index}
                    titulo={titulo}
                    descripcion={descripcion}
                    img={img}
                    btnText={btnText}
                    btnClassName={btnClassName}
                    // Fiufiu={Navbar}
                  />
                )
              )
            : !loading &&
              cards.length < 1 && (
                <h1 className="text-danger text-center">UPS FALLO LA CARGA</h1>
              )}
        </div>

        {/* <Carusel /> */}
        {/* show ?  <Counter /> : null */}
        {/* <Counter />
          <Counter /> */}

        {/* <button onClick={toggle} >{show ? " Ocultar" : "Mostrar"}</button> */}
      </Main>
    </div>
  );
}

export default App;

//https://www.rionegro.com.ar/wp-content/uploads/2021/10/Imagen-gardenia-flor-jazmin-del-cabo.jpg?w=1024
