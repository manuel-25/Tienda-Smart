import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap"
function NavBar() {
    let none = { textDecoration: 'none' }
    return (
        <div>
            <Navbar bg="light" variant="light" expand="md">
                <Container fluid>
                    <Navbar.Brand><Link to="/"><img className="logo" src={"/images/tiendaSmartLogo.png"} alt="Logo"></img></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav 
                            defaultActiveKey="/" 
                            className="me-auto my-2 my-lg-0" 
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item>
                                <Nav.Link><Link to="/categoria/Smartphones" style={none}>Smartphones</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link><Link to="/categoria/Tablets" style={none}>Tablets</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link><Link to="/categoria/Accesorios" style={none}>Smartphones</Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>*/}
                {/*<ul className="menu">
                    <li className="menu-item">
                        <Link to="/categoria/Smartphones" className="menu-link">Smartphones</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/categoria/Tablets" className="menu-link">Tablets</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/categoria/Accesorios" className="menu-link">Accesorios</Link>
                    </li>
                </ul>*/}
        </div>
    )
}
export default NavBar