import React from "react";
import { motion } from "framer-motion";
import { catalogue } from "../../Main.json";

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
        className="w-2/5 h-12 flex-col items-center justify-center"
      >
        <img
          src={`${fileRoute}/characters/${e.name}/${e.name}_Icon.webp`}
          className="h-full w-auto m-auto cursor-pointer"
          alt=""
        />
        <p className="text-md text-white text-center p-2">{e.name}</p>
      </motion.div>
    );
  };

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
            onClick={() => onElement(0)}
            onHoverStart={() => onAudio(0)}
            src="/assets/genshin/icons/Anemo.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            onClick={() => onElement(1)}
            onHoverStart={() => onAudio(0)}
            src="/assets/genshin/icons/Geo.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            onClick={() => onElement(2)}
            onHoverStart={() => onAudio(0)}
            src="/assets/genshin/icons/Electro.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            onClick={() => onElement(3)}
            onHoverStart={() => onAudio(0)}
            src="/assets/genshin/icons/Dendro.svg"
            className="w-full h-full p-4 cursor-pointer"
            alt=""
          />
        </motion.div>
        <div className="w-full h-5/6 flex justify-center">
          <div className="w-2/3 h-1/2 flex items-center justify-evenly">
            {daily.book[element].character[day].map((e: any, index: number) => (
              <CharacterDisplay name={e} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenshinFeature;
