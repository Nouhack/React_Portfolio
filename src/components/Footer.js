import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
      <Col
        className="mt-5"
        md={12}
        style={{
          border: "1px solid grey",
          height: "50px",
          textAlign: "right",
        }}
      >
        <p style={{ marginTop: "10px", color: "white" }}>
          Created By{" "}
          <a href="https://github.com/Nouhack" rel="noopener" target="_blank">
            Nouhack
          </a>{" "}
          Using{" "}
          <a href="https://reactjs.org/" rel="noopener" target="_blank">
            React Js
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
