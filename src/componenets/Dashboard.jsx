import { useContext } from "react";
import { Container, Title } from "../styled-components/styled-dashboard";
import { PokemonContext } from "../context/PokemonContext";

const Dashboard = () => {
  const { dashboardCards, setDashboardCards } = useContext(PokemonContext);

  const defaultImg =
    "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";
  // 길이가 6개인 새로운 배열을 만든 다음에, 6번 map을 돌린다.
  // 등록된 카드가 있는 경우 카드를 보여주고
  // 등록된 카드가 없는 경우 디폴트 사진을 보여준다.
  // 해당 인덱스를 대시보드 카드에서 찾아서 데이터가 들어있나 확인한다.
  // 있으면 카드, 없으면 몬스터 볼을 보여준다.
  const deletePokemonHandler = (cardToDelete) => {
    const deletedDashboardCards = dashboardCards.filter(
      (dashboardCard) => dashboardCard.id !== cardToDelete.id
    );
    setDashboardCards(deletedDashboardCards);
  };

  return (
    <>
      <div>
        <Title>My Pokedex</Title>
      </div>
      <Container>
        {Array.from({ length: 6 }).map((_, index) => {
          const card = dashboardCards[index];
          return (
            <li key={index}>
              {card ? (
                <>
                  <img src={card.img_url} />
                  <p>{card.korean_name}</p>
                  <p>{String(card.id).padStart(3, '0')}</p>
                  <button
                    type="button"
                    onClick={() => deletePokemonHandler(card)}
                  >
                    삭제
                  </button>
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
