import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import { CardStyle, Des, Name, Type } from "../styled-components/styled-pokemoncard";


const PokemonCard = () => {
  // useParams는 URL 경로에서 동적 파라미터를 가져오는데 사용한다.
  // 동적으로 설정된 파라미터를 객체 형태로 반환한다.
  const params = useParams();
  // params 동적 파라미터를 가져오는 객체
  console.log(params);

  // params.id는 문자열로 반환되기 때문에 숫자로 변환해준다.
  const targetPokemon = MOCK_DATA.find((data) => data.id === Number(params.id));

  const navigate = useNavigate();

  const goBack = () => {
    // -1은 이전 페이지로 이동하라는 의미이다.
    navigate(-1);
  }

  return (
    <>
      <CardStyle>
        <img src={`${targetPokemon.img_url}`} />
        <Name>{targetPokemon.korean_name}</Name>
        <Type>타입 : {targetPokemon.types.join(", ")}</Type>
        <Des>{targetPokemon.description}</Des>
        <button type="button" onClick={goBack}>뒤로가기</button>
      </CardStyle>
    </>
  );
};

export default PokemonCard;
