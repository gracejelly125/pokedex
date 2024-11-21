import { useSelector } from "react-redux";
import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";

const Dex = () => {
  const dashboardCards = useSelector((rootState) => rootState.list);

  return (
    <>
      <Dashboard dashboardCards={dashboardCards} />
      <PokemonList dashboardCards={dashboardCards} />
    </>
  );
};

export default Dex;
