import React from "react";
import { catalogue } from "../../Main.json";

const OshiPlayer = (props: any) => {
  const { oshiSongs, colorHex, colorPreset } = catalogue;
  const [songId, setSongId] = React.useState(0);
  const [colorBg, setColorBg] = React.useState(0);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(new Audio(""));
  const [trackProgress, setProgress] = React.useState(0);
  const { duration } = audioRef.current;
  const intervalRef = React.useRef();

  const onSkip = () => {
    audioRef.current.pause();
    if (songId + 1 < oshiSongs.length) {
      setSongId(songId + 1);
    } else {
      setSongId(0);
    }
  };

  const onBack = () => {
    audioRef.current.pause();
    if (songId - 1 < 0) {
      setSongId(oshiSongs.length - 1);
    } else {
      setSongId(songId - 1);
    }
  };

  const onColor = () => {
    if (colorBg + 1 < colorPreset.length) {
      setColorBg(colorBg + 1);
    } else {
      setColorBg(0);
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
    audioRef.current = new Audio(
      `/assets/oshi/songs/${oshiSongs[songId].music}`
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
    <div className="w-full h-full absolute flex items-center justify-center">
      <div className="sticky top-10 w-5/6 h-2/6 flex-col mt-32 z-50">
        <input
          type="range"
          className="w-full"
          step="1"
          min="0"
          value={trackProgress}
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onClick={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
        <div
          className="w-full h-full flex"
          style={{ backgroundColor: `rgba(${colorHex[colorBg]},.4)` }}
        >
          <div className="w-1/6 h-full">
            <img
              className="h-full w-auto"
              src={`/assets/oshi/images/${oshiSongs[songId].image}`}
              alt=""
            />
          </div>
          <div className="w-5/6 h-full flex-col text-white">
            <div className="h-2/3 w-full flex-col p-4 opacity-80">
              <p className="w-full font-bold text-9xl">
                {oshiSongs[songId].name}
              </p>
              <p className="w-full font-light text-4xl">
                {oshiSongs[songId].artist}
              </p>
            </div>
            <div className="h-1/3 w-full flex items-center justify-evenly">
              <img
                onClick={onColor}
                src={`/assets/oshi/icons/${colorPreset[colorBg]}.png`}
                alt=""
                className="h-2/5 w-auto cursor-pointer "
              />
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
              <img
                onClick={() => props.onBackground()}
                src="/assets/oshi/icons/background.png"
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

export default OshiPlayer;
