import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row>
          {" "}
          <Col className="text-center py-3">
            <strong> Copyright &copy; TecHouse Inc,LLC</strong>
            <h1 className="contactfooter">
              {" "}
              <Link to={"/contact"}>Contact Us</Link>
            </h1>
          </Col>
          <Col className="text-center py-3">
            <a
              href="https://www.linkedin.com/in/thiernosissoko/"
              target="blank"
            >
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Col>
          <Col className="text-center py-3">
            <a href="https://www.facebook.com" target="blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </Col>
          <Col className="text-center py-3">
            <a href="https://twitter.com" target="blank">
              {" "}
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Col>
        </Row>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
