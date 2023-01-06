import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='/itemDetail/:id' element={<ItemDetail/>} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
     
    </Router>
  );
}

export default App;
