import React from "react";
import { motion } from "framer-motion";
import Bocchi from "./Bocchi";
import Genshin from "./Genshin";

const Catalouge = () => {
  return (
    <div className="h-auto w-full relative text-gray-800">
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
