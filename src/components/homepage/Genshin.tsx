import React from "react";
import { motion } from "framer-motion";
import GenshinPlayer from "./GenshinPlayer";
import CanvasBackground from "./CanvasBackground";

const spanVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const Genshin = () => {
  return (
    <div
      className="w-full h-auto flex items-center justify-center genshin-container"
      style={{ backgroundColor: "#004677" }}
    >
      <div className="w-5/6 h-screen flex">
        <div className="w-1/3 h-full flex items-center justify-center">
          <div className="w-5/6 h-4/6">
            <div className="w-full font-bold h-1/4 text-right text-7xl ">
              <p>Genshin Wallpaper</p>
            </div>
            <div className="w-full h-2/4 flex items-center">
              <p className="text-2xl text-justify font-extralight">
                A Genshin Impact web-based wallpaper, gives user details about
                the daily character talent, reminders for daily primogems, and
                music player for the released characters.
              </p>
            </div>
            <div className="w-full h-1/4 flex-col mt-2">
              <div className="h-1/2 w-full flex">
                <div className="w-2/5 h-full flex items-center justify-center">
                  <p className="text-6xl font-medium">98%</p>{" "}
                </div>
                <div className="w-3/5 h-full flex-col">
                  <div className="w-full h-1/2">
                    <img
                      src="/assets/icons/4rating.png"
                      className="w-auto h-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-1/2">
                    <p className="text-3xl font-light">120 ratings</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3 flex justify-center items-center">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="h-full w-2/3 flex items-center justify-start"
                >
                  <p className="w-full text-3xl pl-4 font-bold text-left">
                    6,832
                    <motion.span
                      variants={spanVariants}
                      className="text-base pl-2"
                    >
                      Downloads{" "}
                    </motion.span>
                  </p>
                </motion.div>
                <div className="h-full w-1/3 flex items-center justify-evenly">
                  <a
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=2905017768"
                    target="blank_"
                    className=" h-1/2 w-auto"
                  >
                    <img
                      src="/assets/icons/steam.png"
                      className="h-full w-full opacity-80"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://github.com/OriginalCube/Bocchi-Wallpaper"
                    target="blank_"
                    className=" h-1/2 w-auto"
                  >
                    <img
                      src="/assets/icons/github-light.png"
                      className="h-full w-auto opacity-80"
                      alt=""
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-2/3 relative flex items-center justify-center">
          <div className="w-full h-5/6 relative">
            <img
              className="w-full h-full absolute object-cover"
              src="/assets/genshin/images/template_1.png"
              alt=""
            />{" "}
            <GenshinPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genshin;
