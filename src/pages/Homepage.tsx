import React from "react";
import Intro from "../components/homepage/Intro";
import Catalouge from "../components/homepage/Catalouge";

const Homepage = () => {
  return (
    <div className="h-auto w-full ">
      <Intro />
      <Catalouge />
    </div>
  );
};

export default Homepage;
