import { StyledDisplayedContainer } from "./styles/Main/DisplayedTweets/StyledDisplayedContainer";
import { OneTweetContainer } from "./styles/Main/DisplayedTweets/OneTweetContainer";
import OneTweetModel from "./OneTweetModel";
import { FunctionComponent, useContext } from "react";
import AppContext from "./AppContext";
import { Tweet, User } from "./AppContext";



const TweetsFeed: FunctionComponent<TweetsFeedProps> = ({user}) => {

    const { users, tweets } = useContext(AppContext);
    console.log("🚀 ~ file: TweetsFeed.tsx:16 ~ tweets:", tweets)

    
const contenu = {
    
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies erat lobortis sapien aliquet tempus. Sed ut rutrum tellus, nec scelerisque magna. Mauris ac velit eu lectus convallis imperdiet. Nunc vulputate vel tellus et rutrum. Suspendisse ornare tristique diam sed fringilla. Duis facilisis, nisi a faucibus dignissim, ante orci congue ligula, quis fermentum mauris nunc dignissim neque. Proin diam turpis, maximus vel leo non, malesuada pretium eros. Vivamus eu ipsum commodo, pulvinar tellus vel, elementum risus. Ut rutrum leo non sapien sodales, a pulvinar arcu placerat. ",

    image: "https://picsum.photos/id/1/200/300"}

    return (
        <StyledDisplayedContainer>
            <OneTweetContainer>
                <OneTweetModel contenu={tweets} user={user.user1}/>
            </OneTweetContainer>
        </StyledDisplayedContainer>
    )
}
  export default TweetsFeed
