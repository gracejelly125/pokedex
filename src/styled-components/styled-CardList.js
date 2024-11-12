import styled from "styled-components";

export const Header = styled.div`
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: black;
    padding: 20px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  gap: 30px;
  background-color: #8c936e;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 6px;
    outline: 6px solid silver;
    overflow: hidden;
    text-align: center;
    background-color: #ddd6b8;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }

  p {
    margin: 5px auto 5px auto;
  }
`;

export const Container = styled(CardList)`
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
    margin: auto;
  }
`;
