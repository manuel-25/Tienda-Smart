import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useRef } from 'react'

function NavBar() {
    const hamburgerRef = useRef(null)
    const sidebarRef = useRef(null)
    const sidebarLinks = useRef(null)

    function handleHamburger() {
        hamburgerRef.current.classList.toggle('is-active')
        sidebarRef.current.classList.toggle('is-active')
        document.body.classList.toggle('is-menu-open')
    }

    function handleSidebarClick(event) {
        console.log(event)
        const links = sidebarRef.current.querySelectorAll('a')
        links.forEach(link => {
            link.classList.remove('is-active')
        })
        sidebarRef.current.classList.remove('is-active')
        hamburgerRef.current.classList.remove('is-active')
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <button className="hamburger" onClick={handleHamburger} ref={hamburgerRef} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <h1>
                        <Link to="/"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></Link>
                    </h1>

                    <div className="menu">
                        <NavLink to="/categoria/Smartphones" >Smartphones</NavLink>
                        <NavLink to="/categoria/Tablets" className="Tablets " >Tablets</NavLink>
                        <NavLink to="/categoria/Accesorios" className="Accesorios " >Accesorios</NavLink>
                    </div>


                    <CartWidget />
                    
                </div>
            </nav>
            <nav className="sidebar" ref={sidebarRef}>
                <NavLink to="/" ref={sidebarLinks} onClick={handleSidebarClick}>Todos los productos</NavLink>
                <NavLink to="/categoria/Smartphones" ref={sidebarLinks} onClick={handleSidebarClick}>Smartphones</NavLink>
                <NavLink to="/categoria/Tablets" ref={sidebarLinks} onClick={handleSidebarClick}>Tablets</NavLink>
                <NavLink to="/categoria/Accesorios"ref={sidebarLinks} onClick={handleSidebarClick}>Accesorios</NavLink>
                <NavLink to="/contacto" ref={sidebarLinks} onClick={handleSidebarClick}>Contacto</NavLink>
            </nav>
        </div>

    )
}

export default NavBar;