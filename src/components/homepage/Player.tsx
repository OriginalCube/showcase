import React from "react";
import { catalogue } from "../../Main.json";

const Player = (props: any) => {
  const { bocchi } = catalogue;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(new Audio(""));
  const [trackProgress, setProgress] = React.useState(0);
  const { duration } = audioRef.current;
  const intervalRef = React.useRef();

  const onSkip = () => {
    audioRef.current.pause();
    if (props.id + 1 < bocchi.name.length) {
      props.setId(props.id + 1);
    } else {
      props.setId(0);
    }
  };

  const onBack = () => {
    audioRef.current.pause();
    if (props.id - 1 < 0) {
      props.setId(bocchi.name.length - 1);
    } else {
      props.setId(props.id - 1);
    }
  };

  const onScrub = (e: string) => {
    let value = parseInt(e);
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
    setInterval(() => {
      if (audioRef.current.ended) {
        onSkip();
      } else {
        setProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  React.useEffect(() => {
    audioRef.current = new Audio(
      `/assets/bocchi/songs/${bocchi.name[props.id]}.flac`
    );
    audioRef.current.volume = 0.2;
    audioRef.current.play();
    setIsPlaying(true);
  }, [props.id]);

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

  return (
    <div className="h-full w-full flex-col items-center justify-evenly">
      <div className="h-1/6 w-full flex items-center justify-center">
        <input
          className="w-2/3 h-full"
          type="range"
          step="1"
          min="0"
          value={trackProgress}
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onClick={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>
      <div className="flex w-full h-5/6 items-center justify-evenly">
        <img
          onClick={onBack}
          src="/assets/bocchi/icons/backward.png"
          alt=""
          className="h-3/6 w-auto cursor-pointer "
        />
        <img
          src={`/assets/bocchi/icons/${isPlaying ? "pause" : "play"}.png`}
          alt=""
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-1/2 w-auto cursor-pointer "
        />
        <img
          onClick={onSkip}
          src="/assets/bocchi/icons/forward.png"
          alt=""
          className="h-1/2 w-auto cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Player;
