import React from "react";
import { motion } from "framer-motion";
import GenshinPlayer from "./GenshinPlayer";
import { catalogue } from "../../Main.json";
import GenshinFeature from "./GenshinFeature";

const spanVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const Genshin = () => {
  const { bgData } = catalogue;
  const { bgColor } = catalogue;
  const { genshinText } = catalogue;
  const { genshinSubText } = catalogue;
  const [backgroundId, setBackgroundId] = React.useState(0);
  const [talent, setTalent] = React.useState(true);

  const onBackground = () => {
    if (backgroundId + 1 < bgData.length) {
      setBackgroundId(backgroundId + 1);
    } else {
      setBackgroundId(0);
    }
  };

  const onTalent = () => {
    setTalent(!talent);
  };

  return (
    <div
      className="w-full h-auto flex items-center justify-center genshin-container"
      style={{ backgroundColor: `rgba(${bgColor[backgroundId]},1)` }}
    >
      <div className="w-full md:w-5/6 h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-full flex items-center justify-center">
          <div className="w-5/6 h-full md:h-4/6">
            <div
              className="w-full font-bold p-4 md:p-0 h-1/4 text-center md:text-right text-4xl sm:text-7xl "
              style={{ color: `${genshinText[backgroundId]}` }}
            >
              <p>Genshin Wallpaper</p>
              <p className="font-light text-sm mt-2">February 24, 2022</p>
            </div>
            <div className="w-full h-2/4 sm:h-2/4 flex items-center">
              <p
                className="text-white text-sm sm:text-2xl text-justify font-extralight"
                style={{ color: `${genshinSubText[backgroundId]}` }}
              >
                A Genshin Impact web-based wallpaper, gives user details about
                the daily character talent, reminders for daily primogems, and
                music player for the released characters.
              </p>
            </div>
            <div className="w-full h-1/4 flex-col mt-2">
              <div className="h-1/2 w-full flex">
                <div className="w-2/5 h-full flex items-center justify-center">
                  <p
                    className="text-4xl md:text-6xl font-medium"
                    style={{ color: `${genshinText[backgroundId]}` }}
                  >
                    98%
                  </p>{" "}
                </div>
                <div className="w-3/5 h-full flex-col">
                  <div className="w-full h-1/2 flex justify-center md:justify-start">
                    <img
                      src="/assets/icons/4rating.png"
                      className="w-auto h-full opacity-80"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-1/2 flex justify-center md:justify-start">
                    <p
                      className="text-md md:text-3xl text-white font-light"
                      style={{ color: `${genshinSubText[backgroundId]}` }}
                    >
                      120 ratings
                    </p>
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
                  <p
                    className="w-full text-sm md:text-3xl pl-4 font-bold text-left"
                    style={{ color: `${genshinText[backgroundId]}` }}
                  >
                    6,832
                    <motion.span
                      variants={spanVariants}
                      className="text-base pl-2 opacity-100 md:opacity-0"
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
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src="/assets/icons/steam.png"
                      className="h-full w-auto opacity-80"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://github.com/OriginalCube/Bocchi-Wallpaper"
                    target="blank_"
                    className=" h-1/2 w-auto"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
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
        <div className="h-full w-full md:w-2/3 relative flex items-center justify-center">
          <div className="w-full h-full md:h-5/6 relative">
            <motion.img
              className="w-full h-full absolute object-cover"
              src={`/assets/genshin/images/${bgData[backgroundId]}`}
              alt=""
            />{" "}
            {window.innerWidth > 768 && talent ? <GenshinFeature /> : null}
            <GenshinPlayer
              onTalent={onTalent}
              backgroundId={backgroundId}
              onBackground={onBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genshin;
