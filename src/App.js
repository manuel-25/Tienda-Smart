import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Products/ItemListContainer.jsx"
import ItemDetailContainer from './components/Products/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer greetings = "Bienvenidos a Tienda Smart"/>*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
