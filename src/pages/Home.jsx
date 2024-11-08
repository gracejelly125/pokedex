import { useNavigate } from "react-router-dom";
import { Logo } from "../styled-components/styled-Home";
import { useDispatch } from "react-redux";
import { playMusic } from "../redux/slices/musicSlice";
import { BigButton } from "../styled-components/Button";

const Home = () => {
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
      <BigButton onClick={handleStart}>포켓몬 도감 시작하기</BigButton>
    </Logo>
  );
};

export default Home;
