import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import { Box, Stack } from "@chakra-ui/react";
import { ImageWithOverlay } from "./ImageWithOverlay";
// import products1 from "../products1";
import Products from "./Products";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import * as React from "react";

const Landing = () => {
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/best");
      setProducts1(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {" "}
      <main className="py-3">
        <Container>
          <Box
            maxW="7xl"
            mx="auto"
            px={{
              base: "4",
              md: "8",
              lg: "12",
            }}
            py={{
              base: "6",
              md: "8",
              lg: "12",
            }}
          >
            <Stack
              height={{
                md: "640px",
              }}
              direction={{
                base: "column",
                md: "row",
              }}
              spacing={{
                base: "6",
                md: "10",
              }}
              align="stretch"
            >
              <Link to={"/smartphones"}> </Link>
              <ImageWithOverlay
                flex="1"
                objectPosition="top center"
                title="Latests Smartphones"
                description="The most affordable smartphones on the market"
                src="/images/product-1.jpg"
                alt="Lovely Image"
              />

              <Stack
                spacing={{
                  base: "6",
                  md: "10",
                }}
                maxW={{
                  md: "400px",
                }}
              >
                <ImageWithOverlay
                  spacing="4"
                  title="Latest Smartwatches"
                  description="The most affordable smart watches on the market"
                  src="/images/product-2.jpg"
                  alt="Lovely Image"
                />
                <ImageWithOverlay
                  spacing="4"
                  title="Latest tablets"
                  description="The most affordable tablets on the market"
                  src="/images/product-5.jpg"
                  alt="Lovely Image"
                />
              </Stack>
            </Stack>
          </Box>

          <Slider />
          <h1 className="bestseller">Best Sellers</h1>
          <Row>
            {products1.map((product) => (
              <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Landing;
