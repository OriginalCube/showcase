import React from "react";
import { motion } from "framer-motion";
import { catalogue } from "../../../../Main.json";

const GenshinFeature = () => {
  const { daily } = catalogue;
  const [day, setDay] = React.useState(0);
  const [element, setElement] = React.useState(0);
  let audioSounds = new Audio();
  const fileRoute = "/assets/genshin";

  const onAudio = (e: number) => {
    if (e === 0) {
      audioSounds = new Audio(`${fileRoute}/audios/sub menu.mp3`);
    } else if (e === 1) {
      audioSounds = new Audio(`${fileRoute}/audios/reminder.mp3`);
    }
    audioSounds.volume = 0.2;
    audioSounds.play();
  };

  const onElement = (e: number) => {
    setElement(e);
    onAudio(1);
  };

  React.useEffect(() => {
    const date = new Date().getDay();
    if (date === 1 || date === 4) {
      setDay(0);
    } else if (date === 2 || date === 5) {
      setDay(1);
    } else if (date === 3 || date === 6) {
      setDay(2);
    } else {
      setDay(2);
    }
  }, []);

  const CharacterDisplay = (e: any) => {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => onAudio(0)}
        className="w-2/5 h-24 flex-col items-center justify-center"
      >
        <img
          src={`${fileRoute}/characters/${e.name}/${e.name}_Icon.webp`}
          className="h-full w-auto m-auto cursor-pointer"
          alt=""
        />
        <p className="text-xl text-white text-center p-2">{e.name}</p>
      </motion.div>
    );
  };

  return (
    <div className="h-auto w-full flex items-center justify-center mt-24">
      <div className="flex-col w-full h-auto">
        <p className="w-full text-center text-6xl text-white">
          Character Talent Book per Region
        </p>
        <div className="h-24 w-full flex items-center justify-center mt-24">
          <motion.div
            animate={{
              y: [10, -10, 10],
              transition: { duration: 5, repeat: Infinity },
            }}
            className="h-full w-2/6 flex items-center justify-evenly opacity-90"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/assets/genshin/icons/Anemo.svg"
              onClick={() => onElement(0)}
              onHoverStart={() => onAudio(0)}
              className="h-full w-auto cursor-pointer"
              alt=""
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/assets/genshin/icons/Geo.svg"
              onClick={() => onElement(1)}
              onHoverStart={() => onAudio(0)}
              className="h-full w-auto cursor-pointer"
              alt=""
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/assets/genshin/icons/Electro.svg"
              onClick={() => onElement(2)}
              onHoverStart={() => onAudio(0)}
              className="h-full w-auto cursor-pointer"
              alt=""
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/assets/genshin/icons/Dendro.svg"
              onHoverStart={() => onAudio(0)}
              onClick={() => onElement(3)}
              className="h-full w-auto cursor-pointer"
              alt=""
            />
          </motion.div>
        </div>
        <div className="h-48 w-full flex items-center justify-center mt-20">
          <div className="w-4/6 h-full flex">
            {daily.book[element].character[day].map((e: any, index: number) => (
              <CharacterDisplay name={e} key={index} />
            ))}
          </div>
        </div>
        <div className="h-auto w-full text-white flex-col items-center justify-center mt-20">
          <div className="h-auto w-5/6 m-auto">
            <p className="text-6xl w-full text-center">Daily Reminder</p>
          </div>
          <div className="h-48 w-full mt-4 flex items-center justify-center">
            <div className="w-3/6 h-full flex items-center justify-between">
              <motion.div
                onHoverStart={() => onAudio(0)}
                whileHover={{ scale: 1.1 }}
                className="w-auto h-full cursor-pointer"
              >
                <img
                  src={`${fileRoute}/icons/commission.svg`}
                  className="h-5/6 w-auto m-auto"
                  alt=""
                />
                <p className="w-full text-4xl text-center mt-8">
                  Daily Commissions
                </p>
              </motion.div>
              <motion.div
                onHoverStart={() => onAudio(0)}
                whileHover={{ scale: 1.1 }}
                className="w-auto h-full cursor-pointer"
              >
                <img
                  src={`${fileRoute}/icons/web-daily.png`}
                  className="h-5/6 w-auto m-auto"
                  alt=""
                />
                <p className="w-full text-4xl text-center mt-8">
                  Daily web-login
                </p>
              </motion.div>
            </div>
          </div>
          <div className="mt-32 h-40 w-full flex items-center justify-center">
            <div className="w-1/2 h-full flex-col text-white">
              <p className="w-full text-center text-3xl">Stats</p>
              <div className="w-full h-2/3 flex items-center justify-evenly mt-4">
                <motion.div className="w-1/3 h-full flex-col">
                  <img
                    className="w-auto h-2/6 m-auto"
                    src="/assets/icons/download-light.png"
                    alt=""
                  />
                  <p className="text-xl font-thin w-full text-center pt-2">
                    6,821 <br />
                    Downloads
                  </p>
                </motion.div>
                <motion.div className="w-1/3 h-full flex-col">
                  <img
                    className="w-auto h-2/6 m-auto"
                    src="/assets/icons/heart.png"
                    alt=""
                  />
                  <p className="text-xl font-thin w-full text-center pt-2">
                    413 <br />
                    Favorites
                  </p>
                </motion.div>
                <motion.div className="w-1/3 h-full flex-col">
                  <img
                    className="w-auto h-2/6 m-auto"
                    src="/assets/icons/like.png"
                    alt=""
                  />{" "}
                  <p className="text-xl font-thin w-full text-center pt-2">
                    120/3 <br />
                    Ratings
                  </p>
                </motion.div>
              </div>
              <div className="w-1/3 m-auto mt-12 h-1/3 flex items-center justify-evenly">
                <a
                  className="w-auto h-5/6"
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=2938115467"
                  target="blank_"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => onAudio(0)}
                    src="/assets/icons/steam.png"
                    className="w-auto h-full cursor-pointer"
                    alt=""
                  />{" "}
                </a>
                <a
                  className="w-auto h-5/6"
                  href="https://github.com/OriginalCube/WE-Genshin-Impact"
                  target="blank_"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => onAudio(0)}
                    src="/assets/icons/github-light.png"
                    className="w-auto h-full cursor-pointer"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenshinFeature;
