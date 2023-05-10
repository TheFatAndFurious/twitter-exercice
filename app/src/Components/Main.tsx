import { StyledMain } from "./styles/StyledMain"
import { StyledFeed } from "./styles/StyledFeed"
import { StyledTrends } from "./styles/StyledTrends"
import HomeBar from "./HomeBar"
import Tweet from "./Tweet"
import { FunctionComponent } from "react"

type MainProps = {
    user: object
}


const Main: FunctionComponent<MainProps> = ({user}) => {

    return (
        <StyledMain>
            <StyledFeed>
                <HomeBar />
                <Tweet user={user}/>
            </StyledFeed>
            <StyledTrends>
                
            </StyledTrends>


        </StyledMain>
    )
}

export default Main