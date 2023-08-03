import React from "react";
import { motion } from "framer-motion";
import { catalogue } from "../../Main.json";
import PaperPlayer from "./PaperPlayer";

const spanVariants = {
  hover: {
    opacity: [0, 1],
    transition: {
      duration: 0.25,
    },
  },
};

const MusicPaper = () => {
  const { paperPresets, paperSongs } = catalogue;
  const [backgroundId, setBackgroundId] = React.useState(0);
  const [id, setId] = React.useState(
    Math.floor(Math.random() * (paperSongs.length - 1))
  );

  const onColor = (e: number) => {
    setBackgroundId(e);
  };

  return (
    <div
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundColor: `${paperPresets[backgroundId].background}`,
      }}
    >
      <div className="h-full md:h-5/6 w-full md:w-5/6 flex flex-col relative md:flex-row ">
        <motion.div
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-1/3 md:h-full w-full md:w-2/3 flex items-center justify-center"
        >
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-3/5 h-full flex items-center justify-center"
          >
            <div className="w-full h-5/6 flex-col">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="w-auto h-1/2 md:w-5/6 md:h-auto m-auto"
                src={`/assets/music-paper/images/${paperSongs[id]}.jpg`}
                alt=""
              />
              <p className="w-full h-2 text-center text-sm md:text-base mt-6 md:mt-4 text-white font-light">
                {paperSongs[id]}
              </p>
              <div className="w-5/6 m-auto h-8 md:h-16 flex items-center justify-center mt-5">
                <PaperPlayer setId={setId} id={id} />
                {/** Music Player Here! */}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="m-auto w-5/6 h-2/3 md:w-1/3 md:h-full flex-col md:flex items-center justify-center">
          <div
            className="w-full h-5/6 md:w-5/6 md:h-5/6 flex-col"
            style={{
              color: `${paperPresets[backgroundId].foreground}`,
            }}
          >
            <div className="w-full font-bold h-1/3 text-center md:text-left text-5xl md:text-7xl pt-4 md:pt-0 ">
              <p className="text-sm font-light mt-2">March 24, 2023</p>
              <p>Music Wallpaper</p>
            </div>
            <div className="w-full h-1/3 flex items-center">
              <p
                style={{ color: `` }}
                className="text-xl md:text-3xl text-left font-extralight opacity-70"
              >
                Inspired from the Bocchi the Rock wallpaper, where users are
                allowed to add their own custom music, colors, and images.
              </p>
            </div>
            <div className="w-full h-1/3 flex-col mt-2">
              <div className="h-1/2 w-full flex">
                <div className="w-2/5 h-full flex items-center justify-center">
                  <p
                    className="text-4xl md:text-6xl font-medium"
                    style={{
                      color: `${paperPresets[backgroundId].foreground}`,
                    }}
                  >
                    97%
                  </p>{" "}
                </div>
                <div className="w-3/5 h-full flex-col">
                  <div className="w-full h-1/3 md:h-1/2">
                    <img
                      src="/assets/icons/4rating.png"
                      className="w-auto h-5/6 opacity-90"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-1/2">
                    <p
                      className="text-2xl md:text-3xl font-light opacity-70"
                      style={{ color: `` }}
                    >
                      92 ratings
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
                  <p className="w-full text-base md:text-3xl pl-4 font-bold text-left">
                    5,177
                    <motion.span
                      variants={spanVariants}
                      className="text-base pl-2 opacity-100 md:opacity-0"
                      style={{
                        color: `${paperPresets[backgroundId].foreground}`,
                      }}
                    >
                      Downloads{" "}
                    </motion.span>
                  </p>
                </motion.div>
                <div className="h-full w-1/3 flex items-center justify-evenly">
                  <a
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=2951409261"
                    target="blank_"
                    className=" h-1/2 w-auto"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src="/assets/icons/steam.png"
                      className="h-full w-full opacity-80"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://github.com/OriginalCube/WE-music-player"
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
          <div className="absolute top-10 h-1/3 w-16 left-0 flex-col opacity-80">
            <div className="w-full h-1/6 flex items-center justify-center mt-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onClick={() => onColor(0)}
                className="w-auto h-full cursor-pointer"
                src="/assets/oshi/icons/purple-2.png"
                alt=""
              />
            </div>
            <div className="w-full h-1/6 flex items-center justify-center mt-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onClick={() => onColor(1)}
                className="w-auto h-full cursor-pointer"
                src="/assets/oshi/icons/yellow-2.png"
                alt=""
              />
            </div>
            <div className="w-full h-1/6 flex items-center justify-center mt-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onClick={() => onColor(2)}
                className="w-auto h-full cursor-pointer"
                src="/assets/oshi/icons/blue-2.png"
                alt=""
              />
            </div>
            <div className="w-full h-1/6 flex items-center justify-center mt-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onClick={() => onColor(3)}
                className="w-auto h-full cursor-pointer"
                src="/assets/oshi/icons/black.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPaper;
