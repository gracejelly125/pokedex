// import { Link } from "react-router-dom";
// import { MOCK_DATA } from "../MOCK_DATA"
import { useEffect, useState } from "react";
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
      <div>
        <Dashboard
          dashboardCards={dashboardCards}
          setDashboardCards={setDashboardCards}
        />
        <PokemonList
          dashboardCards={dashboardCards}
          setDashboardCards={setDashboardCards}
        />
      </div>
    </>
  );
};

export default Dex;
