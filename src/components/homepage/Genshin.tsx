import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Genshin = () => {
  return (
    <div
      className="w-full mt-10"
      style={{
        backgroundImage: `url(/assets/genshin/images/wallpaper-default.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "200vh",
      }}
    ></div>
  );
};

export default Genshin;
