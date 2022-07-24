import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3" rounded>
      <Link to={`/products/${product.product_id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.product_id}}`}>
          <Card.Title as="div">
            <strong>{product.product_name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <h3>{product.price}</h3>
          </div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={product.rating} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
