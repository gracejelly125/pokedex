import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/listSlice";
import { toast } from "react-toastify";
import { CardList } from "../styled-components/styled-CardList";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const dashboardCards = useSelector(state => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상세정보 페이지로 이동
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
    dispatch(addCard(selectedCard));
    toast.success(`${selectedCard.korean_name} 포켓몬이 추가되었습니다.`);
  };

  // 상위 요소 이벤트 전파 방지
  const buttonClickHandler = (e, data) => {
    e.stopPropagation();
    addPokemonToDashboardHandler(data);
  };

  return (
    <>
      <CardList>
        {MOCK_DATA.map((data) => {
          return (
            <PokemonCard
              key={data.id}
              data={data}
              goToDetailHandler={goToDetailHandler}
              buttonClickHandler={buttonClickHandler}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default PokemonList;
