import "./NavBar.css";
import logotipo from "../../img/tiendaSmartLogo.png"

function NavBar() {
    return (
        <header>
            <picture>
                    <a href="index.html"><img className="logo" src={logotipo}></img></a>
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
        </header>
    )
}
export default NavBar