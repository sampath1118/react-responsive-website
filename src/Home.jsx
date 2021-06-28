import React from "react";
import Common from "./Common";
import web from "./images/img1.png";

const Home = () => {
  return (
    <>
      <Common
        name="grow your business with"
        imgsrc={web}
        btnname="Get Started"
        visit="/service"
      />
    </>
  );
};

export default Home;
