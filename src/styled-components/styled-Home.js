import styled from "styled-components";

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: auto;
  }

  button {
    margin-top: 20px;
    padding: 8px 16px;
    background-color: skyblue;
    border: none;
    border-radius: 8px;
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
    background-color: greenyellow;
  }
`;
