import { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Products from "./Products";
import { Link } from "react-router-dom";
import Heroshop from "./Heroshop";

const Less1000 = () => {
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts1(data);
    };
    fetchProducts();
  }, []);
  const products = products1.filter((product) => product.price < 1000);

  return (
    <div>
      <Link className="btn btn-light my-3" to={"/less500"}>
        $500 or less
      </Link>
      <Link className="btn btn-light my-3" to={"/less1000"}>
        $1000 or less
      </Link>
      <Link className="btn btn-light my-3" to={"/smartphones"}>
        Smartphones
      </Link>
      <Link className="btn btn-light my-3" to={"/laptops"}>
        Laptops
      </Link>
      <Link className="btn btn-light my-3" to={"/tablets"}>
        tablets
      </Link>
      <Link className="btn btn-light my-3" to={"/smartwatches"}>
        Smartwatches
      </Link>
      <Heroshop />
      <Row>
        {products.map((product) => (
          <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Less1000;
