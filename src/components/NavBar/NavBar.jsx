import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <header>
            <picture>
                <Link to="/"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></Link>
            </picture>
            <nav className="navbar"> 
                <ul className="menu">
                    <li className="menu-item">
                        <Link to="/categoria/Smartphones" className="menu-link">Smartphones</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/categoria/Tablets" className="menu-link">Tablets</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/categoria/Accesorios" className="menu-link">Accesorios</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}
export default NavBar