import React from "react";
import { motion } from "framer-motion";
import GenshinFeature from "./GenshinFeature";

const Genshin = () => {
  const [isPhone, setIsPhone] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      console.log("isPhone");
      setIsPhone(true);
    } else {
      setIsPhone(false);
      console.log(isPhone); //random fix
    }
  }, [window.innerWidth]);
  return (
    <div
      className="w-full mt-10 genshin-container"
      style={{
        backgroundImage: `url(/assets/genshin/images/wallpaper-default.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "250vh",
      }}
    >
      <div className="h-auto w-full pt-48 flex items-center justify-center">
        <div className="h-full w-5/6 flex items-center justify-center">
          <motion.div
            className="h-full w-auto"
            whileHover={{ scale: 1.1 }}
            animate={{
              rotate: [25, -25, 25],
              transition: { duration: 5, repeat: Infinity },
            }}
          >
            <img
              src="/assets/genshin/icons/paimon.webp"
              className="h-full w-auto p-8 cursor-pointer"
              alt=""
            />{" "}
          </motion.div>
          <p className="text-8xl text-white text-center">
            Genshin Wallpaper <br /> Features
          </p>
        </div>
      </div>
      <GenshinFeature />
      <div className="w-full h-screen mt-72">
        <div className="w-full h-full flex items-end justify-center relative">
          <img
            src="/assets/genshin/images/template_1.png"
            className="w-full h-full absolute object-cover"
            alt=""
          />
          {/* <GenshinPlayer /> */}
        </div>{" "}
      </div>
    </div>
  );
};

export default Genshin;
