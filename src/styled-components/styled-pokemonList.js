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

  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: skyblue;
    border: none;
    border-radius: 8px;
    font-size: 14px;
  }

  button:hover {
    cursor: pointer;
    background-color: greenyellow;
  }

  p {
    margin: 5px auto 5px auto;
  }
`