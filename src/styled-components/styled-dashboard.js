import styled from "styled-components";

export const Header = styled.div`
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: midnightblue;
    padding: 20px;
  }
`;

export const Container = styled.ul`
  background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  gap: 30px;
  margin-bottom: 30px;

  li {
    background-color: wheat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  li:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  p {
    margin: 5px auto 5px auto;
  }

  img {
    width: 100px;
    height: 100px;
    margin: auto;
  }
`;
