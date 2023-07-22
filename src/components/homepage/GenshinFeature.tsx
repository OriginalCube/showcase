import React from "react";
import { motion } from "framer-motion";

const GenshinFeature = () => {
  return (
    <div className="w-full h-1/2 absolute flex items-center justify-center">
      <div className="h-full w-5/6 flex-col">
        <motion.div
          animate={{
            y: [5, 0, 5],
            transition: { duration: 2.5, repeat: Infinity },
          }}
          className="h-1/6 w-1/3 m-auto flex items-center justify-evenly"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/assets/genshin/icons/Anemo.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/assets/genshin/icons/Geo.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/assets/genshin/icons/Electro.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/assets/genshin/icons/Dendro.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GenshinFeature;
