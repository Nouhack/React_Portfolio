import React from "react";
import { Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";

import "./LogoDescription.css";

const AboutUs = ({ rr }) => {
  return (
    <Row>
      <Col md={12} style={{ backgroundColor: "white" }}>
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
          <h2 className="logo"> About us </h2>{" "}
        </div>
      </Col>
      <Col md={6}>
        <div
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-duration={1000}
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            style={{ width: "100%", height: "100%", border: "2px solid grey" }}
            src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NTM5MzU5MDg3MjczODcw/business-structure-which-type-is-best-for-your-business.png"
            alt="none"
          />
        </div>
      </Col>
      <Col md={6}>
        <div
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-duration={1000}
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h5 style={{ lineHeight: "26pt" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora
            cumque eligendi in nostrum labore omnis quaerat.
          </h5>
          <br />
          <ul className="check-list">
            <li>Officia quaerat eaque neque</li>

            <li>Possimus aut consequuntur incidunt</li>

            <li>Lorem ipsum dolor sit amet</li>

            <li>Consectetur adipisicing elit</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
