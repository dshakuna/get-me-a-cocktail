
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/CocktailNavbar.scss';
import { CocktailFinder } from "./CocktailFinder.tsx";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cocktails/">Cocktails</Nav.Link>
            <Nav.Link href="/blog/">Blog</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Recommendations</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pindorcha
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CocktailFinder />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

