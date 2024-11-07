// import { Link } from "react-router-dom";
// import { MOCK_DATA } from "../MOCK_DATA"
import { useEffect } from "react";
// import { PokemonContext } from "../context/PokemonContext";
import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";
import { useSelector } from "react-redux";

//set함수
const Dex = () => {
  // const [dashboardCards, setDashboardCards] = useState(
  //   JSON.parse(localStorage.getItem("dashboardCards")) || []
  // );
  const dashboardCards = useSelector((state) => state.list);

  useEffect(() => {
    localStorage.setItem("dashboardCards", JSON.stringify(dashboardCards));
  }, [dashboardCards]);

  return (
    <>
      {/* <PokemonContext.Provider value={{ dashboardCards, setDashboardCards }}> */}
        <Dashboard />
        <PokemonList />
      {/* </PokemonContext.Provider> */}
    </>
  );
};

export default Dex;
