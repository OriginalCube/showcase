import React from "react";
import { motion } from "framer-motion";

const Catalouge = () => {
  return (
    <div className="h-auto w-full relative">
      <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="homepage-waves h-full"
        style={{
          backgroundImage: `url(/assets/images/layered-waves-haikei_1.svg)`,
        }}
      ></motion.div>
      <div className="h-screen w-full"></div>
    </div>
  );
};

export default Catalouge;
