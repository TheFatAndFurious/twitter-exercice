import { StyledMain } from "./styles/StyledMain"
import { StyledFeed } from "./styles/StyledFeed"
import { StyledTrends } from "./styles/StyledTrends"
import HomeBar from "./HomeBar"
import Tweet from "./Tweet"
import { FunctionComponent } from "react"
import TweetsFeed from "./TweetsFeed"
import SearchBar from "./SearchBar"
import Trends from "./Trends"

type MainProps = {
    user: object
}


const Main: FunctionComponent<MainProps> = ({user}) => {

    return (
        <StyledMain>
            <StyledFeed>
                <HomeBar />
                <Tweet user={user}/>
                <TweetsFeed user={user}/>
            </StyledFeed>
            <StyledTrends>
                <SearchBar/>
                <Trends />
            </StyledTrends>


        </StyledMain>
    )
}

export default Main