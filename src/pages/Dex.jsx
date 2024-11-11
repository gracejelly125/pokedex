import { useEffect } from "react";
import Dashboard from "../componenets/Dashboard";
import PokemonList from "../componenets/PokemonList";
import { useSelector } from "react-redux";

const Dex = () => {
  // Rootstate 에서 list에 해당하는 state를 구독한다.
  // list state가 바뀔 때 마다 렌더링한다.
  const dashboardCards = useSelector((state) => state.list);

  // 데이터 업데이트 하기
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
