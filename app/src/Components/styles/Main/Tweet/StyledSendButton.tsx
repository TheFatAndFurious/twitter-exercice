import styled from "styled-components";

export const StyledSendButton = styled.button`
    background-color: rgb(30, 144, 255);
    width: 90px;
    height: 38px;
    display: flex;
    float: right;
    border-radius: 9999px;
    color: white;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 24px;
    border: none;
    transition-duration: 0.2s;

    &:hover {
        background-color: #1F75FE;
    }

    &:disabled {
        background-color: grey
    }

`
export const StyledSpan = styled.span`
    font-weight: 800;
    font-size: 15px`