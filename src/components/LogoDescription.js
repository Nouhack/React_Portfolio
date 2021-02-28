import React from "react";
import HeaderNav from "./HeaderNav";
import "./LogoDescription.css";
import Typist from "react-typist";
import backgroundImage from "../pictures/backgroundImage.jpeg";

const LogoDescription = ({
  AboutExec,
  FeaturesExec,
  HomeExec,
  ProjectExec,
  TeamExec,
  rr,
  setisLoaded,
  isLoaded,
}) => {
  return (
    <div ref={rr}>
      <img
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          height: "100vh",
          width: "100%",
          objectFit: "cover",
        }}
        src={backgroundImage}
        alt=""
        onLoad={() => setisLoaded(true)}
      />
      {isLoaded && (
        <>
          <div>
            <HeaderNav
              AboutExec={AboutExec}
              FeaturesExec={FeaturesExec}
              HomeExec={HomeExec}
              ProjectExec={ProjectExec}
              TeamExec={TeamExec}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              textAlign: "center",
              //     backgroundColor: "red",
              position: "relative",
            }}
          >
            <h3
              style={{
                color: "white",
              }}
              className="logo"
            >
              <Typist>
                Developer <Typist.Delay ms={700} /> portfolio
              </Typist>
            </h3>
            <a onClick={TeamExec} className="btn" style={{ marginTop: "30px" }}>
              ↓
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default LogoDescription;
