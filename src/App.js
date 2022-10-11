import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Products/ItemListContainer.jsx"
import ItemDetailContainer from './components/Products/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import CartContainer from './components/CartView/CartContainer';

import { BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from './context/cartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greetings = "Bienvenidos a Tienda Smart"/>}/>

            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
            <Route path="/productos/:id" element={<ItemDetailContainer />}/>
              
            <Route path="/cart" element={<CartContainer />}/>

            <Route path="*" element={<h1>404: Pagina no encontrada</h1>}/>
          </Routes>
        <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
