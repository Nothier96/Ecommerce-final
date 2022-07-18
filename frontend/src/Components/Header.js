import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      {" "}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">TecHouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <i className="fa-solid fa-house"></i> Home
              </Nav.Link>
              <Nav.Link href="/Products">
                {" "}
                <i className="fa-solid fa-shop"></i> Products
              </Nav.Link>
              <Nav.Link href="/Contact">
                {" "}
                <i className="fa-solid  fa-address-book"></i> Contact
              </Nav.Link>
              <Nav.Link href="/login">
                {" "}
                <i className="fa-solid fa-user"></i> Login
              </Nav.Link>
              <Nav.Link href="/cart">
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
