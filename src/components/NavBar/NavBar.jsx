import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap"
function NavBar() {
    let color = { color: '#1E55B3' }
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
                                <Nav.Link as={Link} to="/categoria/Smartphones" style={color}>Smartphones</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/categoria/Tablets" style={color}>Tablets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/categoria/Accesorios" style={color}>Accesorios</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar