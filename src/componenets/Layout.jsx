import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/background-music.mp3" type="audio/mp3" />
      <Outlet isPlaying={isPlaying}/>
    </audio>
  );
};

export default Layout;
