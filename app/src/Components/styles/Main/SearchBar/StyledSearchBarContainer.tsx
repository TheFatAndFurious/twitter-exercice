import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
    display: flex;
    background-color: black;
    flex-grow:1;
    position: sticky;
    top: 0;
    width: 350px;
    `


export const StyledSearchBar = styled.div`
display: flex;
height: 48px;
flex-grow: 1;
margin: 0 auto;
margin-top: 4px;
margin-bottom: 4px;
max-width: 90%;
background-color: #202327;
border-radius: 9999px;
align-items: center;
padding-left: 8px;
color: grey;

input {
    padding-left: 12px;
    border: none;
    background-color: #202327;
    color: grey;

    &:focus {
        outline: none;
        outline-offset: 0;
    }
}
`