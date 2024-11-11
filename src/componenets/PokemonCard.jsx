import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../redux/slices/listSlice";
import { toast } from "react-toastify";
import { BigButton } from "../styled-components/Button";
import {
  Des,
  DetailStyle,
  Name,
  Type,
} from "../styled-components/styled-Detail";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const dashboardCards = useSelector((state) => state.list);

  // params.id를 비교해서 화면에 그릴 해당 포켓몬을 불러온다. 
  const targetPokemon = MOCK_DATA.find((data) => data.id === Number(params.id));
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // 이미 대시보드에 등록된 포켓몬이라면, 버튼 텍스트가 '삭제' 아니라면 '추가'로 출력된다.
  const existingPokemon = dashboardCards.some(
    (dashboardCard) => dashboardCard.id === targetPokemon.id
  );

  // 대시보드 등록된 포켓몬일 경우 삭제할 수 있다.
  // 대시보드의 카드가 이미 6장 이상이라면 alert이 뜬다.
  // 아니라면 포켓몬을 추가한다.
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
      <DetailStyle>
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
      </DetailStyle>
    </>
  );
};

export default PokemonCard;
