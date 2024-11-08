import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Sans KR', Arial, sans-serif;
    margin: auto;
    background-color: pink;
    }
`;

export default GlobalStyle;
