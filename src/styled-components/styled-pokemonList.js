import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  gap: 30px;
  background-color: skyblue;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    background-color: wheat;
  }

  li:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  p {
    margin: 5px auto 5px auto;
  }
`;
