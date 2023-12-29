import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/CocktailNavbar.scss';

export const CocktailNavbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={scroll ? "shrink" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home" className="mx-auto">
                    <img src="asd.png" className={scroll ? "small-logo" : "large-logo"} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#left">Left Link</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#right">Right Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
