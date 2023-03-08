import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"
import { useRef } from 'react';

function NavBar() {
    //const hamburger = document.querySelector('.hamburger')
    const hamburgerRef = useRef(null);

    function handleHamburger() {
        hamburgerRef.current.classList.toggle('is-active');
      }


    return (

        <nav className="navbar">
            <div className="navbar-container">
                <h1>
                    <Link to="/"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></Link>
                </h1>

                <div className="menu"> 
                    <NavLink to="/categoria/Smartphones" >Smartphones</NavLink>
                    <NavLink to="/categoria/Tablets" className="Tablets " >Tablets</NavLink>
                    <NavLink to="/categoria/Accesorios" className="Accesorios " >Accesorios</NavLink>
                </div>

                <CartWidget />

                <button className="hamburger" onClick={handleHamburger} ref={hamburgerRef} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <script src="/navbar.js"></script>
        </nav>

    )
}
export default NavBar