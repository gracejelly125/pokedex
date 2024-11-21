import { SmallButton } from "../styled-components/Button";

const PokemonCard = ({ data, goToDetailHandler, buttonClickHandler }) => {
  return (
    <li onClick={() => goToDetailHandler(data)}>
      <img src={`${data.img_url}`} />
      <p>{data.korean_name}</p>
      <p>No.{String(data.id).padStart(3, "0")}</p>
      <SmallButton type="button" onClick={(e) => buttonClickHandler(e, data)}>
        추가
      </SmallButton>
    </li>
  );
};

export default PokemonCard;
