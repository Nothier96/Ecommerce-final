import { Container } from "react-bootstrap";

import Footer from "./Footer";
import Header from "./Header";

const Products = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to the product page</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
