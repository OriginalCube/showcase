import React from "react";
import { catalogue } from "../../Main.json";
import { motion } from "framer-motion";
import OshiPlayer from "./OshiPlayer";

const spanVariants = {
  hover: {
    opacity: [0, 1],
    transition: {
      duration: 0.25,
    },
  },
};

const Oshi = () => {
  const [backgroundId, setBackgroundId] = React.useState(0);
  const [colorBg, setColorBg] = React.useState(0);
  const { colorHex, imagePresets, oshiBackground, colorPreset, oshiText } =
    catalogue;

  const onColor = () => {
    if (colorBg + 1 < colorPreset.length) {
      setColorBg(colorBg + 1);
    } else {
      setColorBg(0);
    }
  };

  const onBackground = () => {
    if (backgroundId + 1 < imagePresets.length) {
      setBackgroundId(backgroundId + 1);
    } else {
      setBackgroundId(0);
    }
  };

  return (
    <div
      className="w-full h-auto flex items-center justify-center"
      style={{ backgroundColor: `${oshiBackground[colorBg]}` }}
    >
      <div className="w-full md:w-5/6 h-screen flex flex-col md:flex-row">
        <div className="h-full w-full md:w-2/3 relative flex items-center justify-center">
          <div className="w-full h-full md:h-5/6 relative">
            <img
              className="absolute h-full w-full object-contain"
              src={`/assets/oshi/background/${imagePresets[backgroundId]}.png`}
              alt=""
            />
            <OshiPlayer
              onBackground={onBackground}
              onColor={onColor}
              colorBg={colorBg}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 h-full flex items-center justify-center">
          <div className="w-5/6 h-full md:h-4/6">
            <div
              className="w-full font-bold p-4 md:p-0 h-1/4 text-center md:text-left text-4xl sm:text-7xl "
              style={{ color: `rgb(${colorHex[colorBg]})` }}
            >
              <p>Oshi no Ko Wallpaper</p>
              <p className="text-sm font-light">May 24, 2023</p>
            </div>
            <div className="w-full h-2/4 sm:h-2/4 flex items-center">
              <p
                className="text-white text-sm sm:text-2xl text-justify font-extralight"
                style={{ color: `${oshiText[colorBg]}` }}
              >
                A web-based wallpaper, inspired from the anime Oshi no Ko and
                monstercat audio visualizer. Users are allowed to add their own
                custom background, colors, and are able to use presets saved in
                the wallpaper.
              </p>
            </div>
            <div className="w-full h-1/4 flex-col mt-2">
              <div className="h-1/2 w-full flex">
                <div className="w-2/5 h-full flex items-center justify-center">
                  <p
                    className="text-4xl md:text-6xl font-medium"
                    style={{ color: `rgb(${colorHex[colorBg]})` }}
                  >
                    92%
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
                      style={{ color: `${oshiText[colorBg]}` }}
                    >
                      52 ratings
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
                    style={{ color: `rgb(${colorHex[colorBg]})` }}
                  >
                    3,717
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
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=2980038620"
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
                    href="https://github.com/OriginalCube/WE-Genshin-Impact"
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
      </div>
    </div>
  );
};

export default Oshi;
