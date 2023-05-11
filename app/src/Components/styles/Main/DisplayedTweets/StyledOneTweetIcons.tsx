import styled from "styled-components";

export const StyledOneTweetIcons = styled.div`
    display: flex;
    max-width: 75%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #343434;
    `

export const IconsList = styled.ul`
    list-style: none;
    display: flex;
    width: 90%;
    justify-content: space-between;
    `

export const OneIcon = styled.li`
    transition: 0.4s;


    &:nth-child(1){
        
        &:hover {
            color: rgb(31, 117, 254);
        }
    }

    &:nth-child(2){
        
        &:hover {
            color: green;
        }
    }

    &:nth-child(3){
        
        &:hover {
            color: #FF00FF;
        }
    }

    &:nth-child(4){
        
        &:hover {
            color: rgb(31, 117, 254);
        }
    }

    &:nth-child(5){
        
        &:hover {
            color: rgb(31, 117, 254);
        }
    }




        span{
            padding-left: 5px;
        }
`

