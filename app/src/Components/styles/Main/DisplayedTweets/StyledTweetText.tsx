import styled from "styled-components";

export const StyledTweetText = styled.div`
display: flex;
flex-direction: column;
max-width: 77%;
margin: 0 auto;
max-height: 600px;
padding-bottom: 12px;

span {
    text-align: justify;
}

img {
    margin-top: 16px;
    border-radius: 10px;
    border: 1px solid #343434;
    object-fit: fill;
}
`