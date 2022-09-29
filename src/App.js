import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Products/ItemListContainer.jsx"
import ItemDetailContainer from './components/Products/ItemDetailContainer'
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>

            <Route path="/" element={<ItemListContainer greetings = "Bienvenidos a Tienda Smart"/>}/>

            <Route path="/productos/:id" element={<ItemDetailContainer />}/>
            
            <Route path="*" element={<h1>404: Pagina no encontrada</h1>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
