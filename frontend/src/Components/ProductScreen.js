import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const ProductScreen = () => {
  const params = useParams();
  const [products1, setProducts1] = useState(undefined);

  useEffect(() => {
    axios.get(`/api/products/${params.id}`).then((res) => {
      setProducts1(res.data);
    });
  }, [params.id]);

  return (
    <div>
      {products1 && (
        <>
          <Link className="btn btn-light my-3" to={"/shop"}>
            Go back to Shop
          </Link>
          <Row>
            <Col md={6}>
              <Image
                src={products1[0].image}
                alt={products1[0].product_name}
                fluid
              />
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <strong>
                    <h3>{products1[0].product_name}</h3>
                  </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={products1[0].rating} />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${products1[0].price}</ListGroup.Item>
                <ListGroup.Item>
                  <strong>Description: {products1[0].description}</strong>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <strong>${products1[0].price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>In Stock</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to={"/cart"}>
                      <button className="btn-block" type="button">
                        Add to Cart
                      </button>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
