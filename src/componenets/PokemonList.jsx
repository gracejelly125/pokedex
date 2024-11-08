import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import { CardList } from "../styled-components/styled-pokemonList";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/listSlice";
import { toast } from "react-toastify";
import { SmallButton } from "../styled-components/Button";

const PokemonList = () => {
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
    dispatch(addCard(selectedCard));
    toast.success(`${selectedCard.korean_name} 포켓몬이 추가되었습니다.`);
  };

  const buttonClickHandler = (e, data) => {
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
              <p>No.{String(data.id).padStart(3, "0")}</p>
              <SmallButton
                $primary
                type="button"
                onClick={(e) => buttonClickHandler(e, data)}
              >
                추가
              </SmallButton>
            </li>
          );
        })}
      </CardList>
    </>
  );
};

export default PokemonList;
