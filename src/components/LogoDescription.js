import React from "react";
import HeaderNav from "./HeaderNav";
import "./LogoDescription.css";

const LogoDescription = ({
  AboutExec,
  FeaturesExec,
  HomeExec,
  ProjectExec,
  TeamExec,
  rr,
}) => {
  return (
    <div
      ref={rr}
      style={{
        height: "100vh",

        backgroundImage: `url(https://images.pexels.com/photos/6008939/pexels-photo-6008939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${window.innerHeight}&w=${window.innerWidth})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
          justifyContent: "flex-end",
          width: "100%",
          height: "55%",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "white",
            backgroundColor: "rgba(41, 43, 44, 0.4)",
            padding: "50px",
            borderRadius: "10px",
          }}
          className="logo"
        >
          Developer portfolio
        </h3>
      </div>

      <div
        style={{
          height: "40%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <a onClick={TeamExec} className="btn">
            ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoDescription;
