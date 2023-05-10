import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: "Ubuntu";
        src: local("Ubuntu"),
        url("../../fonts/Ubuntu/Ubuntu-Regular.ttf") format("truetype");
        font-weight: Regular;
        }


    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }    
    
    body {
        background: ${({theme}) => theme.background};
        color: #d6d9db;
        font-family: "Ubuntu";
    }

    img {
        max-width: 100%;
    }
    
    `

    export default GlobalStyles