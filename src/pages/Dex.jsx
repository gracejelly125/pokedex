import { useEffect } from "react";
import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";
import { useSelector } from "react-redux";

const Dex = () => {
  const dashboardCards = useSelector((state) => state.list);

  useEffect(() => {
    localStorage.setItem("dashboardCards", JSON.stringify(dashboardCards));
  }, [dashboardCards]);

  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
