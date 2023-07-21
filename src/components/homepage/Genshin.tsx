import React from "react";
import { motion } from "framer-motion";
import GenshinFeature from "./GenshinFeature";
import GenshinPlayer from "./GenshinPlayer";
import CanvasBackground from "./CanvasBackground";

const Genshin = () => {
  return (
    <div
      className="w-full mt-10 genshin-container"
      style={{
        backgroundImage: `url(/assets/genshin/images/wallpaper-default.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "200vh",
      }}
    >
      <div className="h-auto w-full pt-48 flex items-center justify-center">
        <div className="h-full w-5/6 flex items-center justify-center">
          <motion.div
            className="h-full w-auto"
            whileHover={{ scale: 1.1 }}
            animate={{
              rotate: [25, -25, 25],
              transition: { duration: 5, repeat: Infinity },
            }}
          >
            <img
              src="/assets/genshin/icons/paimon.webp"
              className="h-full w-auto p-8 cursor-pointer"
              alt=""
            />{" "}
          </motion.div>
          <p className="text-8xl text-white text-center">
            Genshin Wallpaper <br /> Features
          </p>
        </div>
      </div>
      <GenshinFeature />
      <div
        style={{
          position: "absolute",
          top: "350vh",
          backgroundImage: `url(/assets/genshin/images/template_1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "250vh",
          width: "100%",
        }}
      >
        <GenshinPlayer />
        <div
          className="w-full mt-10 genshin-container"
          style={{
            backgroundImage: `url(/assets/genshin/images/wallpaper-default.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "100vh",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Genshin;
