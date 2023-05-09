import { StyledHomeBar } from "./styles/Main/StyledHomeBar";
import { StyledTitleContainer } from "./styles/Main/StyledTitleContainer";
import { StyledSubMenu } from "./styles/Main/StyledSubMenu";
import { StyledSubTitle } from "./styles/Main/StyledSubTitle";


const HomeBar = () => {

    return (
        <StyledHomeBar>
            <StyledTitleContainer>
                <span>Home</span>
            </StyledTitleContainer>
            <StyledSubMenu>
                <StyledSubTitle>
                    <span>For you</span>
                </StyledSubTitle>
                <StyledSubTitle>
                    <span>Following</span>
                </StyledSubTitle>
            </StyledSubMenu>
            
        </StyledHomeBar>
    )
}


export default HomeBar