import React from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";

import LogoDescription from "./components/LogoDescription";
import AboutUs from "./components/AboutUs";
import OurFeatures from "./components/OurFeatures";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  const HomeRef = React.useRef(null);
  const AboutRef = React.useRef(null);
  const FeaturesRef = React.useRef(null);
  const ProjectRef = React.useRef(null);
  const TeamRef = React.useRef(null);

  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const executeScrollHome = () =>
    HomeRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScrollAbout = () =>
    AboutRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScrollFeatures = () =>
    FeaturesRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScrollProject = () =>
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScrollTeam = () =>
    TeamRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Container
      fluid
      style={{
        scrollBehavior: "smooth",
        backgroundColor: "white",
        padding: "0px"
      }}
    >
      <LogoDescription
        rr={HomeRef}
        HomeExec={executeScrollHome}
        AboutExec={executeScrollAbout}
        FeaturesExec={executeScrollFeatures}
        ProjectExec={executeScrollProject}
        TeamExec={executeScrollTeam}
      />
      <Container style={{ backgroundColor: "white" }}>
        <AboutUs rr={AboutRef} />
        <OurFeatures rr={FeaturesRef} />
        <Projects rr={ProjectRef} />
        <Team rr={TeamRef} />
        <Footer />
      </Container>
    </Container>
  );
}
