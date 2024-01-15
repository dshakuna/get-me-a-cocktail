
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/HeaderNavbar.scss';
import { CocktailFinder } from "./CocktailFinder.tsx";
import logo from '../assets/logo-3.jpg';
import { Link } from 'react-router-dom';

export function HeaderNavbar() {
    return (

        <Navbar expand="lg" >
            <Container className="navbar-custom">
                <Navbar.Brand href="#">
                    <img src={logo} className="d-inline-block img-fluid" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav variant="pills" className="me-auto my-2 my-lg-0" as="ul">
                        <Nav.Item as="li">
                            <Link to='/'>Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to='/cocktails'>Cocktails</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to='/blog'>Blog</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to='/favorites'>Favorites</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to='/contact'>Contact</Link>
                        </Nav.Item>s
                    </Nav>

                    <CocktailFinder />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}