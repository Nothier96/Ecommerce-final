import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {" "}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="/images/realogo.png" alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {" "}
              <Nav.Link as={Link} to="/">
                <i className="fa-solid fa-house"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                {" "}
                <i className="fa-solid fa-shop"></i> Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                {" "}
                <i className="fa-solid  fa-address-book"></i> Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                {" "}
                <i className="fa-solid fa-user"></i> Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                {" "}
                <i className="fa-solid fa-cart-shopping"></i> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
