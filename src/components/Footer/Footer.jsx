import "./Footer.css"
import {Link} from "react-router-dom"
import Logo from "../Logo/Logo"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/" className="footer-link">Inicio</Link>
          <Link to="/" className="footer-link">Categorías</Link>
          <Link to="/" className="footer-link">Acerca de</Link>
          <Link to="/" className="footer-link">Contacto</Link>
        </div>
        <div className="footer-info">
          <Logo />
          <p>Tienda Smart &copy; 2022</p>
          <p>Teléfono: +54 911 2184-2237</p>
          <p>Email: manuelotamendi97@gmail.com.com</p>
          <div className="social-links">
            <a href="https://www.facebook.com/tiendasmart" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com/tiendasmart" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/tiendasmart" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer