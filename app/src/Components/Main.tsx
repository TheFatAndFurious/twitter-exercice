import { StyledMain } from "./styles/StyledMain"
import { StyledFeed } from "./styles/StyledFeed"
import { StyledTrends } from "./styles/StyledTrends"
import { FunctionComponent } from "react"
import TweetsFeed from "./TweetsFeed"
import SearchBar from "./SearchBar"
import Trends from "./Trends"
import TopMain from "./TopMain"
import WhotToFollow from "./WhoToFollow"

type MainProps = {
    user: object
}


const Main: FunctionComponent<MainProps> = ({user}) => {

    return (
        <StyledMain>
            <StyledFeed>
                <TopMain user={user}/>
                <TweetsFeed />
            </StyledFeed>
            <StyledTrends>
                <SearchBar/>
                <Trends />
                <WhotToFollow user={user.user1}/>
            </StyledTrends>


        </StyledMain>
    )
}

export default Main