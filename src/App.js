import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Products/ItemListContainer.jsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings = "Bienvenidos a Tienda Smart"/>
    </div>
  );
}

export default App;
