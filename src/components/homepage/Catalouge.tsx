import Bocchi from "./Bocchi";
import Genshin from "./Genshin";
import MusicPaper from "./MusicPaper";
import Oshi from "./Oshi";

const Catalouge = () => {
  return (
    <div className="h-auto w-full relative text-gray-800">
      <div className="w-full h-auto">
        <p className="text-center pt-80 pb-24 text-4xl md:text-8xl">
          Wallpaper Engine Works
        </p>
      </div>
      <Bocchi />
      <Genshin />
      <MusicPaper />
      <Oshi />
    </div>
  );
};

export default Catalouge;
