import styled from "styled-components";

export const StyledOneTweetUserInfo = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 12px;

  img {
    margin-right: 12px;
  }

  span {
    margin-right: 6px;
  }

  button {
    color: grey;
    background-color: black;
    border: none;
    margin-left: auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;
