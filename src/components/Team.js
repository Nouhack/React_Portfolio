import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./LogoDescription.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Team = ({ rr }) => {
  return (
    <Row>
      <Col xs={12} md={12}>
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
            padding: "60px"
          }}
        >
          <h2 className="logo">Developer</h2>{" "}
        </div>
      </Col>
      <Col xs={12} md={12} lg={4}>
        <LazyLoadImage
          data-aos="zoom-in"
          data-aos-duration={2000}
          style={{
            //    borderRadius: "100%",
            border: "2px solid grey",
            width: "100%",
            height: "100%",
            objectFit: "conatain"
          }}
          src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="none"
        />
      </Col>
      <Col xs={12} md={12} lg={8} className="mt-5 mt-lg-0">
        <div
          data-aos="fade-up"
          data-aos-duration={2000}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Card border="secondary">
            <Card.Header
              style={{ backgroundColor: "rgba(28, 196, 157, 0.07)" }}
            >
              Developer Name
            </Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Team;
