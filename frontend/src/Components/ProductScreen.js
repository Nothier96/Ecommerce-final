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
const ProductScreen = () => {
  const params = useParams();
  const [products1, setProducts1] = useState(undefined);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get(`/api/products/${params.id}`);
    //   setProducts1(data);
    // };
    // fetchProducts();
    axios.get(`/api/products/${params.id}`).then((res) => {
      //   console.log(res.data);
      setProducts1(res.data);
      setIsPending(false);
    });
    if (products1 === undefined) {
      setIsPending(true);
    }
  }, []);

  return <div>{products1 && <div>{products1[0].product_name}</div>}</div>;
};

export default ProductScreen;
