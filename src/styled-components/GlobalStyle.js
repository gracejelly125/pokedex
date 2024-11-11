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
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: auto;
    background-color: #c4cc9d;
    }
`;

export default GlobalStyle;
