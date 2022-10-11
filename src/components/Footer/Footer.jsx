import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
    return(
        <div className="main-container">
            <div className="footer-container">
                <ul className="footer-list">
                    <li className="footer-item">Copyright © 2022 Tienda Smart</li>
                    <li className="footer-item">Ayuda</li>
                    <li className="footer-item">Contacto</li>
                </ul>
                <div className="footer-logo-container">
                    <Link to="/"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer