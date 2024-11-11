import { useNavigate } from "react-router-dom";
import { MainLogo } from "../styled-components/styled-Detail";
import { useDispatch } from "react-redux";
import { playMusic } from "../redux/slices/musicSlice";
import { BigButton } from "../styled-components/Button";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startMusic = () => {
    dispatch(playMusic());
  };

  // 버튼 클릭시 페이지 이동과 함께 BGM이 재생된다.
  const handleStart = () => {
    startMusic();
    navigate("/dex");
  };

  return (
    <MainLogo>
      <img
        src="/images/1.jpg"
      />
      <BigButton onClick={handleStart}>포켓몬 도감 시작하기</BigButton>
    </MainLogo>
  );
};

export default Home;
