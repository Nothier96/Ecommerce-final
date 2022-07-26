import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>The Best Elctronics</h2>
          <p>Shop a wide range of electronics available on the market</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Most Affordable Prices</h2>
          <p>
            Buy with us and get points that may help buy your next cool tech
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Your Best Tech</h2>
          <p>The best quality and customer service</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
