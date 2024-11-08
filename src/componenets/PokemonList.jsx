import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import { CardList } from "../styled-components/styled-pokemonList";
// import { useContext } from "react";
// import { PokemonContext } from "../context/PokemonContext";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/listSlice";
import { toast } from "react-toastify";


const PokemonList = () => {
  // const { dashboardCards, setDashboardCards } = useContext(PokemonContext);
  const dashboardCards = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetailHandler = (data) => {
    navigate(`/dex/${data.id}`);
  };

  const addPokemonToDashboardHandler = (selectedCard) => {
    const existingPokemon = dashboardCards.some(
      (dashboardCard) => dashboardCard.id === selectedCard.id
    );
    if (existingPokemon) {
      toast.error(`${selectedCard.korean_name} 포켓몬은 이미 추가되었습니다.`);
      return;
    }
    if (dashboardCards.length >= 6) {
      toast.error("이미 6장의 카드를 추가했습니다. 카드 중 하나를 삭제하세요.");
      return;
    }
    // setDashboardCards((prevDashboardCards) => [
    //   ...prevDashboardCards,
    //   selectedCard,
    // ]);
    dispatch(addCard(selectedCard));
  };

  const buttonClickHandler = (e, data) => {
    // 버튼 클릭시 이벤트 전파 방지! 이벤트가 상위 li로 전파되지 않도록 한다!
    e.stopPropagation();
    addPokemonToDashboardHandler(data);
  };

  return (
    <>
      <CardList>
        {MOCK_DATA.map((data) => {
          return (
            <li key={data.id} onClick={() => goToDetailHandler(data)}>
              <img src={`${data.img_url}`} />
              <p>{data.korean_name}</p>
              <p>No. {String(data.id).padStart(3, "0")}</p>
              <button
                type="button"
                onClick={(e) => buttonClickHandler(e, data)}
              >
                추가
              </button>
            </li>
          );
        })}
      </CardList>
    </>
  );
};

export default PokemonList;
