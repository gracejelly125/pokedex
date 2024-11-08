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
  const dashboardCards = useSelector((state) => state.list);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultImg = "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

  const deletePokemonHandler = (cardToDelete) => {
    dispatch(deleteCard(cardToDelete));
    toast.success(`${cardToDelete.korean_name} 포켓몬이 삭제되었습니다.`);
  };

  const goToDetailHandler = (card) => {
    navigate(`/dex/${card.id}`);
  };

  const buttonClickHandler = (e, card) => {
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
                  <SmallButton
                    $primary={false}
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
