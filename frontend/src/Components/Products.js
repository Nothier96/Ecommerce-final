import { Card } from "react-bootstrap";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3" rounded>
      <a href={`/products/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <h3>{product.price}</h3>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
