// import { Link } from "react-router-dom";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import products1 from "../products1";
// const ProductScreen = ({ product }) => {
//   return <h1>{product.name}</h1>;
// };

// export default ProductScreen;
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
const Screen = () => {
  const params = useParams();
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProducts1(data);
    };
    fetchProducts();
  }, [params.id]);
  console.log(params.id);
  const product = products1.filter((item) => (item.product_id = params.id));
  console.log(product);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Screen;
