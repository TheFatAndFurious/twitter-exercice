import styled from "styled-components";


export const StyledFuiteButton = styled.div`
    
    
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
    background-color: #1E90FF;
    justify-content: center;
    margin-top: 8px;
    

    &:hover {
        background-color: #1F75FE;
    }


    span {
        font-size: 17px;
        line-height: 20px;font-weight: 700;
        padding: 4px 0;
        letter-spacing: 1px;

    }


`