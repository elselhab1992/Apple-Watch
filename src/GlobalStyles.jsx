import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: poppins,sans-serif;
        width: 100%;
        min-height: 100vh;
        background-color: ${(props) => props.theme.colors.secondary};
        text-transform: capitalize;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

`;

export default GlobalStyles;
