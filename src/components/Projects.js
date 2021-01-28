import React from "react";
import { Row, Col, Image, Accordion, Card } from "react-bootstrap";
import "./LogoDescription.css";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Projects = ({ rr }) => {
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
            padding: "40px"
          }}
        >
          <h2 className="logo">Projects</h2>{" "}
        </div>
      </Col>

      <Col md={12}>
        <Accordion
          style={{ textAlign: "center" }}
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(28, 196, 157, 0.07)",
                fontWeight: "bolder"
              }}
            >
              Category 1
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <LazyLoadImage
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover"
                      }}
                      src="https://fakeimg.pl/600x500/1cc49d,128/ffffff/?text=Image%201&font=lobster"
                      thumbnail
                    />
                  </Col>

                  <Col md={6}>
                    <LazyLoadImage
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover"
                      }}
                      src="https://fakeimg.pl/600x500/5f1cc4,128/ffffff/?text=Image%202&font=lobster"
                      thumbnail
                    />{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(28, 196, 157, 0.07)",
                fontWeight: "bolder"
              }}
            >
              Category 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <LazyLoadImage
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover"
                      }}
                      src="https://fakeimg.pl/600x500/c41c8c,128/ffffff/?text=Image%201&font=lobster"
                      thumbnail
                    />
                  </Col>

                  <Col md={6}>
                    <LazyLoadImage
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover"
                      }}
                      src="https://fakeimg.pl/600x500/c41c1c,128/ffffff/?text=Image%202&font=lobster"
                      thumbnail
                    />{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
};

export default Projects;
