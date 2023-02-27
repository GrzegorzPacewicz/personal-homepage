import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        word-break: break-word;
        overflow-y: scroll;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        background-color: ${({ theme }) => theme.elementColor.site.background};
        transition: background 1s linear, color 1s linear;
    }
`;
