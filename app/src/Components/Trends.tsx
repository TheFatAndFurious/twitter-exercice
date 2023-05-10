import { StyledTrending } from "./styles/Main/Trending/StyledTrending";
import TrendBlock from "./TrendBlock";
const Trends = () => {
    return (
        <StyledTrending>
            <h3>Trends for you</h3>
            <TrendBlock />
            <TrendBlock />
            <TrendBlock />
            <TrendBlock />
            <TrendBlock />
        </StyledTrending>
    )
}

export default Trends;