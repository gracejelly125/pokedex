import PokemonCard from "../componenets/PokemonCard";

const PokemonDetail = ({ dashboardCards }) => {
  return (
    <>
      <PokemonCard dashboardCards={dashboardCards} />
    </>
  );
};

export default PokemonDetail;
