import React from "react";
import Common from "./Common";
import web from "./images/img2.jpg";

const About = () => {
  return (
    <>
      <Common
        name="I am a MERN-STACK Developer"
        imgsrc={web}
        btnname="Contact Us"
        visit="/contact"
      />
    </>
  );
};

export default About;
