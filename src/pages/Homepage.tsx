import React from "react";
import Intro from "../components/homepage/Intro";
import Catalouge from "../components/homepage/Catalouge";
import Main from "../components/full-stack/FullStack";

const Homepage = () => {
  const [mode, setMode] = React.useState(0);

  return (
    <div className="h-auto w-full ">
      <Intro setMode={setMode} />
      <section id="main">
        {mode === 1 ? <Catalouge /> : null}
        {mode === 2 ? <Main /> : null}
      </section>
    </div>
  );
};

export default Homepage;
