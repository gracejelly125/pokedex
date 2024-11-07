// import { Link } from "react-router-dom";
// import { MOCK_DATA } from "../MOCK_DATA"
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";

//set함수
const Dex = () => {
  const [dashboardCards, setDashboardCards] = useState(() => {
    try {
      return localStorage.getItem("dashboardCards")
        ? JSON.parse(localStorage.getItem("dashboardCards"))
        : [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("dashboardCards", JSON.stringify(dashboardCards));
  }, [dashboardCards]);

  
  return (
    <>
      <PokemonContext.Provider value={{ dashboardCards, setDashboardCards }} >
          <Dashboard />
          <PokemonList />
      </PokemonContext.Provider>
    </>
  );
};

export default Dex;
