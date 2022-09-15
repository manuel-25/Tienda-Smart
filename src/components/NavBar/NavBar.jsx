import "./NavBar.css";
import logotipo from "../../img/tiendaSmartLogo.png"
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <header>
            <picture>
                    <a href="index.html"><img className="logo" src={logotipo} alt="Logo"></img></a>
                </picture>
            <nav className="navbar"> 
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#" className="menu-link">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">Products</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">Contact</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}
export default NavBar