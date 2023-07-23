import React from "react";
import { catalogue } from "../../Main.json";
import OshiPlayer from "./OshiPlayer";

const Oshi = () => {
  const [backgroundId, setBackgroundId] = React.useState(0);
  const { imagePresets } = catalogue;

  const onBackground = () => {
    if (backgroundId + 1 < imagePresets.length) {
      setBackgroundId(backgroundId + 1);
    } else {
      setBackgroundId(0);
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="h-auto w-full relative">
        <OshiPlayer onBackground={onBackground} />
        <div className="w-full h-screen relative">
          <img
            className="w-full h-full absolute"
            src={`/assets/oshi/background/${imagePresets[backgroundId]}.png`}
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-5/6 h-5/6 flex-col">
          <p className="text-8xl text-black text-center">
            Oshi no Ko Wallpaper
          </p>
          <div className="w-full h-5/6 m-auto border-2 border-black mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Oshi;
