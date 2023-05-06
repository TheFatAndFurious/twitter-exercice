import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 12px;
    border-radius: 9999px;
    max-width: 100%;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
    font-size: 15px;
    background: black;
    color: #d6d9db;


    &:hover {
        color: grey;
    }
`