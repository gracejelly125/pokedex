import styled from "styled-components";

export const CardStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: auto;
  }

  button {
    margin-top: 20px;
    padding: 5px 10px;
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

export const Name = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    color: midnightblue;
`

export const Type = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: darkred;
`

export const Des = styled.p`
    text-align: center;
    width: 1200px;
    font-size: 16px;
`