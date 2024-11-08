import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: greenyellow;
  }
`;

export const SmallButton = styled(BaseButton)`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.$primary ? "#7A5CFF" : "#FF5E00")};
`;

export const BigButton = styled(BaseButton)`
  margin: 20px 5px;
  padding: 8px 16px;
  background-color: #ff69b4;
  font-size: 16px;
`;

export const MusicButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
