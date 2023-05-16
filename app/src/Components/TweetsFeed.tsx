import { StyledDisplayedContainer } from "./styles/Main/DisplayedTweets/StyledDisplayedContainer";
import { OneTweetContainer } from "./styles/Main/DisplayedTweets/OneTweetContainer";
import { FunctionComponent, useContext } from "react";
import AppContext from "./AppContext";
import { StyledOneTweetModel } from "./styles/Main/DisplayedTweets/StyledOneTweetModel";
import { StyledOneTweetUserInfo } from "./styles/Main/DisplayedTweets/StyledOneTweetUserInfo";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTweetText } from "./styles/Main/DisplayedTweets/StyledTweetText";
import OneTweetIcons from "./OneTweetIcons";

const TweetsFeed: FunctionComponent = () => {
  const { users, tweets } = useContext(AppContext);

  const sortedTweets = [...tweets].sort((a,b) =>b.id - a.id)

  return (
    <StyledDisplayedContainer>
      {sortedTweets.map((tweet) => {
        const user = users.find((user) => user.id === +tweet.user);
        if (!user) {
          return null;
        }

        return (
          <OneTweetContainer key={tweet.id}>
            <StyledOneTweetModel>
              <StyledOneTweetUserInfo>
                <Avatar someUrl={user.image} />
                <ProfileName name={user.name} />
                <ProfileNickName nickname={user.userName} />
              </StyledOneTweetUserInfo>
              <StyledTweetText>
                <span>{tweet.body}</span>
              </StyledTweetText>
              <OneTweetIcons />
            </StyledOneTweetModel>
          </OneTweetContainer>
        );
      })}
    </StyledDisplayedContainer>
  );
};

export default TweetsFeed;

