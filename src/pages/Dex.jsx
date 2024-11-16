import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";

const Dex = ({ dashboardCards, isPlaying }) => {
  return (
    <>
      <Dashboard dashboardCards={dashboardCards} isPlaying={isPlaying} />
      <PokemonList dashboardCards={dashboardCards} />
    </>
  );
};

export default Dex;
