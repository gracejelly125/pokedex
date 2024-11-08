import { useNavigate } from "react-router-dom";
import { Logo } from "../styled-components/styled-Home";
import { useDispatch } from "react-redux";
import { playMusic } from "../redux/slices/musicSlice";

const Home = () => {
  // navigate 링크가 열시면 홈 메인 페이지가 보이게 해준다.
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const startMusic = () => {
      dispatch(playMusic());
  };

  const handleStart = () => {
    startMusic();
    navigate("/dex"); 
  };

  return (
    <Logo>
      <img
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        alt="포켓몬 로고"
      />
      <button onClick={handleStart}>포켓몬 도감 시작하기</button>
    </Logo>
  );
};

export default Home;
