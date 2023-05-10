import { StyledDisplayedContainer } from "./styles/Main/DisplayedTweets/StyledDisplayedContainer";
import { OneTweetContainer } from "./styles/Main/DisplayedTweets/OneTweetContainer";
import OneTweetModel from "./OneTweetModel";
import { FunctionComponent } from "react";



type TweetsFeedProps = {
    user: object
}


const TweetsFeed: FunctionComponent<TweetsFeedProps> = ({user}) => {

const contenu = "hey salut!"

    return (
        <StyledDisplayedContainer>
            <OneTweetContainer>
                <OneTweetModel contenu={contenu} user={user}/>
            </OneTweetContainer>
        </StyledDisplayedContainer>
    )
}
  export default TweetsFeed
