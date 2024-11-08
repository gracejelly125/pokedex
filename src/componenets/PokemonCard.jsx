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

const PokemonCard = () => {
  const dispatch = useDispatch();
  const dashboardCards = useSelector((state) => state.list);
  // useParams는 URL 경로에서 동적 파라미터를 가져오는데 사용한다.
  // 동적으로 설정된 파라미터를 객체 형태로 반환한다.
  const params = useParams();
  // params 동적 파라미터를 가져오는 객체
  // console.log(params);

  // params.id는 문자열로 반환되기 때문에 숫자로 변환해준다.
  const targetPokemon = MOCK_DATA.find((data) => data.id === Number(params.id));

  const navigate = useNavigate();

  const goBack = () => {
    // -1은 이전 페이지로 이동하라는 의미이다.
    navigate(-1);
  };

  // 대시보드에 해당 포케몬이 있으면 삭제하기, 없으면 추가하기 버튼 출력
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
    toast.success(`${targetPokemon.korean_name} 포켓몬이 추가되었습니다.`)
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
          <button type="button" onClick={goBack}>
            뒤로가기
          </button>
          <button type="button" onClick={pokemonCardButtonClickHandler}>
            {existingPokemon ? "삭제하기" : "추가하기"}
          </button>
        </div>
      </CardStyle>
    </>
  );
};

export default PokemonCard;
