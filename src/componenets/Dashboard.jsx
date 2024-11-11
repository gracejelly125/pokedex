import { Container, Header } from "../styled-components/styled-CardList";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../redux/slices/listSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { playMusic, stopMusic } from "../redux/slices/musicSlice";
import { MusicButton, SmallButton } from "../styled-components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const dashboardCards = useSelector((state) => state.list);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultImg =
    "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

  // 대시보드에서 삭제하기
  const deletePokemonHandler = (cardToDelete) => {
    dispatch(deleteCard(cardToDelete));
    toast.success(`${cardToDelete.korean_name} 포켓몬이 삭제되었습니다.`);
  };

  // 상세정보 페이지로 이동
  const goToDetailHandler = (card) => {
    navigate(`/dex/${card.id}`);
  };

  // 상위 요소로의 이벤트 전파 방지
  const buttonClickHandler = (e, card) => {
    e.stopPropagation();
    deletePokemonHandler(card);
  };

  // 배경음악 재생/정지 기능
  const toggleMusicHandler = () => {
    if (isPlaying) {
      dispatch(stopMusic());
    } else {
      dispatch(playMusic());
    }
  };

  return (
    <>
      <Header>
        <h1>My Pokedex</h1>
        <MusicButton type="button" onClick={toggleMusicHandler}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faCircleStop} />
          ) : (
            <FontAwesomeIcon icon={faCirclePlay} />
          )}
        </MusicButton>
      </Header>
      <Container>
        {Array.from({ length: 6 }).map((_, index) => {
          const card = dashboardCards[index];
          return (
            <li key={index} onClick={() => goToDetailHandler(card)}>
              {card ? (
                <>
                  <img src={card.img_url} />
                  <p>{card.korean_name}</p>
                  <p>No.{String(card.id).padStart(3, "0")}</p>
                  <SmallButton
                    type="button"
                    onClick={(e) => buttonClickHandler(e, card)}
                  >
                    삭제
                  </SmallButton>
                </>
              ) : (
                <img src={defaultImg} />
              )}
            </li>
          );
        })}
      </Container>
    </>
  );
};

export default Dashboard;
