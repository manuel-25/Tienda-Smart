import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"
import { useRef } from 'react';

function NavBar() {
    const hamburgerRef = useRef(null);
    const mobileNavRef = useRef(null);

    function handleHamburger() {
        hamburgerRef.current.classList.toggle('is-active');
        mobileNavRef.current.classList.toggle('is-active')
        document.body.classList.toggle('is-menu-open');
      }


    return (
        <div>
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
            </nav>
            <nav className="sidebar" ref={mobileNavRef}>
            <NavLink to="/categoria/Smartphones" >Smartphones</NavLink>
            <NavLink to="/categoria/Tablets" className="Tablets " >Tablets</NavLink>
            <NavLink to="/categoria/Accesorios" className="Accesorios " >Accesorios</NavLink>
            <CartWidget />
        </nav>
    </div>

    )
}
export default NavBar