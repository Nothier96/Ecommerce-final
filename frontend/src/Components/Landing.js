import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

const Landing = () => {
  return (
    <div>
      {" "}
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to TechHouse</h1>
          <Slider />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
