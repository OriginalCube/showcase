import React from "react";
import { motion } from "framer-motion";

type IntroProps = {
  setMode : (e:number) => void
}

const Intro = (props: IntroProps) => {
  const [colorId, setColorId] = React.useState(0);

  const onMode = (e:number) =>{
    props.setMode(e); 
  }

  return (
    <div className={`relative h-screen w-full flex-col text-white`}>
      <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="homepage-waves h-full"
        style={{
          backgroundImage: `url(/assets/images/layered-waves-haikei.svg)`,
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.25 }}
        className={`h-2/3 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center z-50`}
      >
        <div className="h-2/3 md:h-1/3 w-5/6 md:w-2/5 flex flex-col md:flex-row">
          <motion.div
            initial={{ x: "-50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="w-2/3 h-full flex items-start justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "-4px 8px rgb(255,255,255)",
                border: "2px solid white",
              }}
              className="font-bold text-6xl w-full md:w-auto md:text-9xl m-auto p-2 outline-none"
              onClick={() => setColorId(colorId + 1)}
            >
              Cube's
            </motion.button>
          </motion.div>
          <div className="w-5/6 md:w-1/3 h-1/3 md:h-full flex-col">
            <motion.div
              initial={{ y: "-50vh", opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="w-full h-1/2"
            >
              <motion.div
                initial={{ textShadow: "0px 0px 0px white" }}
                whileHover={{ scale: 1.1, textShadow: "0px 0px 4px white" }}
                className="w-full h-full"
              >
                <a
                  className="w-full h-full flex items-center justify-start p-2"
                  href="https://github.com/OriginalCube"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/github.png"
                    className="h-8 pr-2 w-auto opacity-90"
                    alt=""
                  />
                  <p className="text-md md:text-2xl">Github</p>
                </a>{" "}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: "50vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="w-full h-1/2"
            >
              <motion.div
                initial={{ textShadow: "0px 0px 0px white" }}
                whileHover={{ scale: 1.1, textShadow: "0px 0px 4px white" }}
                className="w-full h-full"
              >
                <a
                  className="w-full h-full flex items-center justify-start p-2"
                  href="https://steamcommunity.com/id/OriginalCube/myworkshopfiles/"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/steam.png"
                    className="h-8 pr-2 w-auto opacity-90"
                    alt=""
                  />
                  <p className="text-md md:text-xl">Steam Workshop</p>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.25 }}
        className="w-full h-1/3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center"
      >
        <div className="w-2/3 h-5/6 z-20 flex items-center justify-between">
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "4px 8px rgb(255,255,255)",
              border: "2px solid white",
            }}
            className="w-1/3 h-auto p-2 flex items-center justify-center"
          >
            <a href="#main">
            <button
              onClick={() => onMode(1)}
              className="text-6xl font-medium"
            >
              Front-End
            </button></a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "-4px 8px rgb(255,255,255)",
              border: "2px solid white",
            }}
            className="w-1/3 h-auto p-2 flex items-center justify-center"
          >
            <a href="#main"><button
              onClick={() => onMode(2)}
              className="text-6xl font-medium"
            >
              Full-Stack
            </button></a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
