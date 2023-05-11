import styled from "styled-components";

export const StyledProfileButton = styled.div`
    display: flex;
    cursor: pointer;
    padding: 12px;
    border-radius: 9999px;
    max-width: 100%;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
    font-size: 15px;
    background: black;
    color: #d6d9db;
    border: none;
    margin-top: 4px;
    margin-bottom: 4px;
    align-self: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    justify-self: end;


    &:hover {
        background-color: #343434;
    }

    @media(max-width: 1265px) {
        margin-left: 12px;
    }
    `