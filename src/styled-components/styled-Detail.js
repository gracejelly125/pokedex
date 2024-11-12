import styled from "styled-components";

export const MainLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailStyle = styled(MainLogo)`
  img {
    width: 200px;
    height: auto;
  }
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

export const Type = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
`;

export const Des = styled.p`
  text-align: center;
  width: 1200px;
  font-size: 18px;
  margin-bottom: 30px;
`;
