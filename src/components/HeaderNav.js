import React from "react";
import { Nav } from "react-bootstrap";

const Headerav = ({
  AboutExec,
  FeaturesExec,
  HomeExec,
  ProjectExec,
  TeamExec
}) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "rgba(41, 43, 44, 0.4)",
        zIndex: 100
      }}
    >
      <Nav
        className="justify-content-center"
        //  activeKey="/home"

        style={{
          padding: "20px"
        }}
      >
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={HomeExec}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={AboutExec}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={FeaturesExec}>
            Services
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={ProjectExec}>
            Projects
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={TeamExec}>
            Developer
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Headerav;
