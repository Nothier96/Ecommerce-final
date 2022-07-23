import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import { Box, Stack } from "@chakra-ui/react";
import { ImageWithOverlay } from "./ImageWithOverlay";
// import products1 from "../products1";
import Products from "./Products";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Landing = () => {
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
              <ImageWithOverlay
                flex="1"
                objectPosition="top center"
                title="All dressed"
                description="Dress that feels a little fany for when pajamas aren't cutting it"
                src="https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
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
                  title="Topped off"
                  src="https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80"
                  alt="Lovely Image"
                />
                <ImageWithOverlay
                  spacing="4"
                  title="Go chic"
                  src="https://images.unsplash.com/photo-1548306530-3ece53b754b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                  alt="Lovely Image"
                />
              </Stack>
            </Stack>
          </Box>

          <Slider />
          <h1>Latest products</h1>

          <Row>
            {products1.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
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
