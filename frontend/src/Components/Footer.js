import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {" "}
          <Col className="text-center py-3">
            <h1>TecHouse</h1>
          </Col>
          <Col className="text-center py-3">Copyright &copy; TecHouse</Col>
          <Col className="text-center py-3">Copyright &copy; TecHouse</Col>
        </Row>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
