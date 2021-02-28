import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./LogoDescription.css";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurFeatures = ({ rr }) => {
  return (
    <Row>
      <Col md={12}>
        <div
          data-aos="fade-up"
          data-aos-duration={2000}
          ref={rr}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h2 className="logo">Our Services </h2> <br />
          <h5 style={{ lineHeight: "26pt", color: "white" }}>
            Our Company provides many software developement services and
            features around web and mobile developement areas using recent
            technologies. below you can find services list that we provide :
          </h5>
        </div>
      </Col>
      <Col xs={12} md={12} lg={3} className="mt-4 mt-md-4">
        <div
          data-aos="fade-up"
          data-aos-duration={3000}
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>Technology 1 :</p>
          <ul className="check-list" style={{ color: "white" }}>
            <li>Example 1</li>
            <br />

            <li>Example 2</li>
            <br />

            <li>Example 3</li>
          </ul>
        </div>
      </Col>
      <Col xs={12} md={12} lg={6}>
        <div
          style={{ borderRadius: "10px", overflow: "hidden" }}
          data-aos="zoom-in"
          data-aos-duration={3000}
        >
          <Carousel>
            <Carousel.Item>
              <LazyLoadImage
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                className="d-block w-100 "
                src="https://fakeimg.pl/700x320/1cc4a3,128/ffffff/?text=Image%201&font=lobster"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <LazyLoadImage
                className="d-block w-100 "
                style={{ width: "100%", height: "300px" }}
                src="https://fakeimg.pl/700x320/c41cab,128/ffffff/?text=Image%202&font=lobster"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <LazyLoadImage
                className="d-block w-100 "
                style={{ width: "100%", height: "300px" }}
                src="https://fakeimg.pl/700x320/c41c35,128/ffffff/?text=Image%203&font=lobster"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <LazyLoadImage
                className="d-block w-100 "
                style={{ width: "100%", height: "300px" }}
                src="https://fakeimg.pl/700x320/2a1cc4,128/ffffff/?text=Image%204&font=lobster"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <LazyLoadImage
                className="d-block w-100 "
                style={{ width: "100%", height: "300px" }}
                src="https://fakeimg.pl/700x320/76c41c,128/ffffff/?text=Image%205&font=lobster"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
      <Col xs={12} md={12} lg={3} className="mt-4 mt-md-4">
        <div
          data-aos="fade-up"
          data-aos-duration={3000}
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>Technology 2 :</p>
          <ul className="check-list" style={{ color: "white" }}>
            <li>Example 1</li>
            <br />

            <li>Example 2</li>
            <br />

            <li>Example 3</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default OurFeatures;
