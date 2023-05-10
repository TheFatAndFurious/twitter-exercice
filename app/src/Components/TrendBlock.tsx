import { StyledTrendBlock, StyledTrendCat, StyledKeyword, StyledTrendNum } from "./styles/Main/Trending/StyledTrendBlock"

const TrendBlock = () => {


    return (
        <StyledTrendBlock>
            <StyledTrendCat>
                Trending in France
            </StyledTrendCat>
            <StyledKeyword>
                #Mathieu porte des perruques
            </StyledKeyword>
            <StyledTrendNum>
                250k
            </StyledTrendNum>
        </StyledTrendBlock>
    )
}

export default TrendBlock