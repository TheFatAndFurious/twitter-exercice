import { StyledMain } from "./styles/StyledMain"
import { StyledFeed } from "./styles/StyledFeed"
import { StyledTrends } from "./styles/StyledTrends"
import HomeBar from "./HomeBar"
const Main = () => {

    return (
        <StyledMain>
            <StyledFeed>
                <HomeBar />
            </StyledFeed>
            <StyledTrends>
                
            </StyledTrends>


        </StyledMain>
    )
}

export default Main