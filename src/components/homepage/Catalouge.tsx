import React from "react";
import { motion } from "framer-motion";
import Bocchi from "./Bocchi";
import Genshin from "./Genshin";

const Catalouge = () => {
  return (
    <div className="h-auto w-full relative text-gray-800">
      <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="homepage-waves h-full"
        style={{
          backgroundImage: `url(/assets/images/layered-waves-haikei_1.svg)`,
        }}
      ></motion.div>
      <div className="w-full h-auto">
        <p className="text-center pt-80 pb-24 text-8xl">
          Wallpaper Engine Works
        </p>
      </div>
      <Bocchi />
      <Genshin />
    </div>
  );
};

export default Catalouge;
