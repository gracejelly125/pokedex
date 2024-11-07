
import { useNavigate } from "react-router-dom";
import { Logo } from "../styled-components/styled-Home";

const Home = () => {
  // navigate 링크가 열시면 홈 메인 페이지가 보이게 해준다.
  const navigate = useNavigate();


  return (
    <Logo>
      <img src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="포켓몬 로고" />
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </Logo>
  );
};

export default Home;
