import React from "react";
import { catalogue } from "../../Main.json";
import { motion } from "framer-motion";
import Player from "./Player";

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

const Bocchi = () => {
  const { bocchi } = catalogue;
  const [id, setId] = React.useState(
    Math.floor(Math.random() * bocchi.name.length)
  );

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-5/6 w-5/6 flex">
        <motion.div
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-full w-2/3 flex items-center justify-center"
          style={{
            backgroundColor: `${bocchi.background[id]}`,
          }}
        >
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-3/5 h-full flex items-center justify-center"
          >
            <div className="w-full h-5/6 flex-col">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="w-5/6 h-auto m-auto"
                src={`/assets/bocchi/images/${bocchi.name[id]}.jpg`}
                alt=""
              />
              <p className="w-full h-2 text-center text-base mt-6 text-white font-light">
                {bocchi.name[id]}
              </p>
              <div className="w-5/6 m-auto h-16 flex items-center justify-center mt-5">
                <Player setId={setId} id={id} />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <div
            className="w-5/6 h-2/3 flex-col"
            style={{
              color: `${bocchi.text[id]}`,
            }}
          >
            <div className="w-full font-bold h-1/3 text-left text-7xl">
              <p>Bocchi Wallpaper</p>
            </div>
            <div className="w-full h-1/3 flex items-center">
              <p
                style={{ color: `${bocchi.background[id]}` }}
                className="text-3xl text-justify font-extralight"
              >
                Created for the Anime Bocchi the Rock! A web-based wallpaper
                that plays songs and create customizable playlist for users.
              </p>
            </div>
            <div className="w-full h-1/3 flex-col mt-2">
              <div className="h-1/2 w-full flex">
                <div className="w-2/5 h-full flex items-center justify-center">
                  <p
                    className="text-6xl font-medium"
                    style={{ color: `${bocchi.text[id]}` }}
                  >
                    98%
                  </p>{" "}
                </div>
                <div className="w-3/5 h-full flex-col">
                  <div className="w-full h-1/2">
                    <img
                      src="/assets/icons/rating.png"
                      className="w-auto h-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-1/2">
                    <p
                      className="text-3xl font-light"
                      style={{ color: `${bocchi.background[id]}` }}
                    >
                      13,347 ratings
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
                  <p className="w-full text-3xl pl-4 font-bold text-left">
                    881, 220
                    <motion.span
                      variants={spanVariants}
                      className="text-base pl-2"
                      style={{ color: `${bocchi.background[id]}` }}
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
                      src="/assets/icons/steam-logo.png"
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
                      src="/assets/icons/github-logo.png"
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

export default Bocchi;
