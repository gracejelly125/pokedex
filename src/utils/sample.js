export const pokemonCardButtonClickHandler = () => {
    if (existingPokemon) {
      dispatch(deleteCard(targetPokemon));
      toast.success(`${targetPokemon.korean_name} 포켓몬이 삭제되었습니다.`);
    } else if (dashboardCards.length >= 6) {
      toast.error("이미 6장의 카드를 추가했습니다. 카드 중 하나를 삭제하세요.");
      return;
    } else {
      dispatch(addCard(targetPokemon));
      toast.success(`${targetPokemon.korean_name} 포켓몬이 추가되었습니다.`);
    }
  };