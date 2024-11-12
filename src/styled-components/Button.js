import styled from "styled-components";

const BaseButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-style: normal;
  border: none;
  border-radius: 6px;
  border: 1px solid black;
  background-color: #8c936e;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: #9bae7b;
  }
`;

export const SmallButton = styled(BaseButton)`
  margin-top: 10px;
  padding: 5px 10px;
`;

export const BigButton = styled(BaseButton)`
  margin: 0 5px;
  padding: 6px 16px;
  font-size: 16px;
`;

export const MusicButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 30px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
