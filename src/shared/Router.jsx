import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Router = () => {
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const dashboardCards = useSelector((state) => state.list);
  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("dashboardCards", JSON.stringify(dashboardCards));
  }, [dashboardCards]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <BrowserRouter>
      <div>
        <audio ref={audioRef} loop>
          <source src="/music/background-music.mp3" type="audio/mp3" />
        </audio>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dex" element={<Dex dashboardCards={dashboardCards} isPlaying={isPlaying} />} />
          <Route path="dex/:id" element={<PokemonDetail dashboardCards={dashboardCards} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
