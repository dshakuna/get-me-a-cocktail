
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/HeaderNavbar.scss';
import { CocktailFinder } from "./CocktailFinder.tsx";
import logo from '../assets/logo-3.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (

        <Navbar expand="lg" >
            <Container className="navbar-custom">
                <Navbar.Brand href="#">
                    <img src={logo} className="d-inline-block img-fluid" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/cocktails'>Cocktails</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Recommendations</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Gin
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Pindorcha
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                    </Nav>
                    <CocktailFinder />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;