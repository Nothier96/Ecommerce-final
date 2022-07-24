import { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Products from "./Products";
const Shop = () => {
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts1(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      <Row>
        {products1.map((product) => (
          <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
