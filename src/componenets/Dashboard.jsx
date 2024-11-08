// import { useContext } from "react";
import { Container, Header } from "../styled-components/styled-dashboard";
// import { PokemonContext } from "../context/PokemonContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../redux/slices/listSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { playMusic, stopMusic } from "../redux/slices/musicSlice";
import { MusicButton, SmallButton } from "../styled-components/Button";

const Dashboard = () => {
  // const { dashboardCards, setDashboardCards } = useContext(PokemonContext);
  const dashboardCards = useSelector((state) => state.list);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultImg =
    "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";
  // 길이가 6개인 새로운 배열을 만든 다음에, 6번 map을 돌린다.
  // 등록된 카드가 있는 경우 카드를 보여주고
  // 등록된 카드가 없는 경우 디폴트 사진을 보여준다.
  // 해당 인덱스를 대시보드 카드에서 찾아서 데이터가 들어있나 확인한다.
  // 있으면 카드, 없으면 몬스터 볼을 보여준다.
  const deletePokemonHandler = (cardToDelete) => {
    // const deletedDashboardCards = dashboardCards.filter(
    //   (dashboardCard) => dashboardCard.id !== cardToDelete.id
    // );
    // setDashboardCards(deletedDashboardCards);
    dispatch(deleteCard(cardToDelete));
    toast.success(`${cardToDelete.korean_name} 포켓몬이 삭제되었습니다.`);
  };

  const goToDetailHandler = (card) => {
    navigate(`/dex/${card.id}`);
  };

  const buttonClickHandler = (e, card) => {
    // 버튼 클릭시 이벤트 전파 방지! 이벤트가 상위 li로 전파되지 않도록 한다!
    e.stopPropagation();
    deletePokemonHandler(card);
  };

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
          {isPlaying ? "⏹" : "🎵"}
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
                  <SmallButton $primary={false}
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
