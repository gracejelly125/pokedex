import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

// import Layout from './Layout';

const Router = () => {
  const isPlaying = useSelector((state) => state.music.isPlaying)
  const audioRef = useRef(null);

  useEffect(() => {
    if(isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <BrowserRouter>
      <div>
        <audio ref={audioRef} loop >
          <source src="/music/background-music.mp3" type="audio/mp3" />
        </audio>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dex" element={<Dex />} />
        <Route path="dex/:id" element={<PokemonDetail />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
