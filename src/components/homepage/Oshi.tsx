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
      <div className="relative h-screen w-full">
        <img
          className="w-full h-full absolute"
          src={`/assets/oshi/background/${imagePresets[backgroundId]}.png`}
          alt=""
        />
        <OshiPlayer onBackground={onBackground} />
      </div>
    </div>
  );
};

export default Oshi;
