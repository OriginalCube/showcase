import React from "react";
import { catalogue } from "../../Main.json";

const GenshinPlayer = () => {
  const { genshin_songs } = catalogue;
  const [songId, setSongId] = React.useState(
    Math.floor(Math.random() * genshin_songs.length - 1)
  );
  const [character, setCharacter] = React.useState("");
  const [title, setTitle] = React.useState("");

  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(new Audio(""));
  const [trackProgress, setProgress] = React.useState(0);
  const { duration } = audioRef.current;
  const intervalRef = React.useRef();

  const onSkip = () => {
    audioRef.current.pause();
    if (songId + 1 < genshin_songs.length) {
      setSongId(songId + 1);
    } else {
      setSongId(0);
    }
  };

  const onBack = () => {
    audioRef.current.pause();
    if (songId - 1 < 0) {
      setSongId(genshin_songs.length - 1);
    } else {
      setSongId(songId - 1);
    }
  };

  const onScrub = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    setIsPlaying(true);
    startTimer();
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        //skips
        onSkip();
      } else {
        setProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  React.useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  React.useEffect(() => {
    setCharacter(genshin_songs[songId].sub);
    setTitle(genshin_songs[songId].name);
    audioRef.current = new Audio(
      `/assets/genshin/characters/${genshin_songs[songId].sub}/${genshin_songs[songId].name}.mp3`
    );
    audioRef.current.volume = 0.2;
    audioRef.current.play();
    setIsPlaying(true);
  }, [songId]);

  React.useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="h-auto w-full flex-col pb-8 absolute bottom-4">
      <div className="w-full h-auto flex items-center justify-center ">
        <input
          type="range"
          className="w-4/6"
          step="1"
          min="0"
          value={trackProgress}
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onClick={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>
      <div className="h-24 w-full flex items-center justify-center mt-2">
        <div className="w-4/6 h-full flex">
          <div className="w-auto h-full">
            <img
              className="w-full h-full"
              src={`/assets/genshin/characters/${character}/${character}_Frame.webp`}
              alt=""
            />
          </div>
          <div
            className="w-5/6 h-full flex-col"
            style={{ backgroundColor: `rgba(14,47,89,.4)` }}
          >
            <div className="w-full h-2/3 flex-col p-4">
              <p className="font-bold text-xl text-white">{title}</p>
              <p className="font-bold text-sm text-white">
                {character}'s theme
              </p>
            </div>
            <div className="w-3/6 h-1/3 flex items-center justify-evenly">
              <img
                onClick={onBack}
                src="/assets/bocchi/icons/backward.png"
                alt=""
                className="h-2/5 w-auto cursor-pointer "
              />
              <img
                src={`/assets/bocchi/icons/${isPlaying ? "pause" : "play"}.png`}
                alt=""
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-2/5 w-auto cursor-pointer "
              />
              <img
                onClick={onSkip}
                src="/assets/bocchi/icons/forward.png"
                alt=""
                className="h-2/5 w-auto cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenshinPlayer;
