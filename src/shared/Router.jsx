import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import Layout from "../componenets/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dex" element={<Dex />} />
          <Route path="dex/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
