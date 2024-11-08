import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import {
  CardStyle,
  Des,
  Name,
  Type,
} from "../styled-components/styled-pokemoncard";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../redux/slices/listSlice";
import { toast } from "react-toastify";
import { BigButton } from "../styled-components/Button";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const dashboardCards = useSelector((state) => state.list);
  const targetPokemon = MOCK_DATA.find((data) => data.id === Number(params.id));
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const existingPokemon = dashboardCards.some(
    (dashboardCard) => dashboardCard.id === targetPokemon.id
  );

  const pokemonCardButtonClickHandler = () => {
    if (existingPokemon) {
      dispatch(deleteCard(targetPokemon));
      toast.success(`${targetPokemon.korean_name} 포켓몬이 삭제되었습니다.`);
    } else if (dashboardCards.length >= 6) {
      toast.error("이미 6장의 카드를 추가했습니다. 카드 중 하나를 삭제하세요.");
      return;
    } else {
      dispatch(addCard(targetPokemon));
      toast.success(`${targetPokemon.korean_name} 포켓몬이 추가되었습니다.`);
    }
  };

  return (
    <>
      <CardStyle>
        <img src={`${targetPokemon.img_url}`} />
        <Name>{targetPokemon.korean_name}</Name>
        <Type>타입 : {targetPokemon.types.join(", ")}</Type>
        <Des>{targetPokemon.description}</Des>
        <div>
          <BigButton type="button" onClick={goBack}>
            뒤로가기
          </BigButton>
          <BigButton type="button" onClick={pokemonCardButtonClickHandler}>
            {existingPokemon ? "삭제" : "추가"}
          </BigButton>
        </div>
      </CardStyle>
    </>
  );
};

export default PokemonCard;
