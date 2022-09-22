import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <header>
            <picture>
                    <a href="index.html"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></a>
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