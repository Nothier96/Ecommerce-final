import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <main className="py-3">
        <Container>
          <h1>Welcome to the contact page</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" required>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
              <Form.Text className="text-muted">
                We'll never share your personal information.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
              <Form.Text className="text-muted">
                We'll never share your personal information.
              </Form.Text>
            </Form.Group>

            <Row>
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>How can we serve you today ?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </main>
    </div>
  );
};

export default Contact;
