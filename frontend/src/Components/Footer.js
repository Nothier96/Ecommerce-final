import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row>
          {" "}
          <Col className="text-center py-3">
            <h1>TecHouse</h1>
          </Col>
          <Col className="text-center py-3">
            <i className="fa-brands fa-linkedin"></i>
          </Col>
          <Col className="text-center py-3">
            <i className="fa-brands fa-facebook"></i>
          </Col>
          <Col className="text-center py-3">
            <i className="fa-brands fa-twitter"></i>
          </Col>
          <Col className="text-center py-3">Copyright &copy; TecHouse</Col>
        </Row>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
