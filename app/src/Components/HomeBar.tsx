import { StyledHomeBar } from "./styles/Main/Navbar/StyledHomeBar";
import { StyledTitleContainer } from "./styles/Main/Navbar/StyledTitleContainer";
import { StyledSubMenu } from "./styles/Main/Navbar/StyledSubMenu";
import { StyledSubTitle } from "./styles/Main/Navbar/StyledSubTitle";


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