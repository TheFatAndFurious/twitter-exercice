import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    //font
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }    
    
    body {
        background: ${({theme}) => theme.background};
        color: #d6d9db;
    }

    img {
        max-width: 100%;
    }
    
    `

    export default GlobalStyles