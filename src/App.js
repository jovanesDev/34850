import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import CarritoContextProvider from "./context/CarritoContext";

function App() {
  return (
    <CarritoContextProvider>
      <Navbar/>
      <ItemListContainer/>
    </CarritoContextProvider>
  );
}

export default App;
