import { StyledDisplayedContainer } from "./styles/Main/DisplayedTweets/StyledDisplayedContainer";
import { OneTweetContainer } from "./styles/Main/DisplayedTweets/OneTweetContainer";
import AppContext from "./AppContext";
import { StyledOneTweetModel } from "./styles/Main/DisplayedTweets/StyledOneTweetModel";
import { StyledOneTweetUserInfo } from "./styles/Main/DisplayedTweets/StyledOneTweetUserInfo";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTweetText } from "./styles/Main/DisplayedTweets/StyledTweetText";
import OneTweetIcons from "./OneTweetIcons";
import { useContext, useState } from "react";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const TweetsFeed = () => {
  const { users, tweets, setTweets } = useContext(AppContext);

  const [edit, setEdit] = useState(false);

  //? ON RENVERSE LA LISTE DES TWEETS POUR AFFICHER LE PLUS RECENT EN PREMIER
  const sortedTweets = [...tweets].sort((a, b) => b.id - a.id);

  //? FONCTION POUR EFFACER UN TWEET
  const deleteTweet = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${id}`);
    } catch (error) {
      console.error(error);
    }
    updateTweets();
  };

  //? FONCTION POUR METTRE A JOUR LA LISTE DES TWEETS APRES EN AVOIR EFFACE UN
  const updateTweets = async () => {
    try {
      const response = await fetch("http://localhost:3000/tweets");
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledDisplayedContainer>
      {sortedTweets.map((tweet) => {
        const user = users.find((user) => user.id === +tweet.user);
        if (!user) {
          return null;
        }

        return (
          <>
            <OneTweetContainer key={tweet.id}>
              <StyledOneTweetModel>
                <StyledOneTweetUserInfo>
                  <Avatar someUrl={user.image} />
                  <ProfileName name={user.name} />
                  <ProfileNickName nickname={user.userName} />
                  <button onClick={() => deleteTweet(tweet.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </StyledOneTweetUserInfo>
                <StyledTweetText>
                  {!edit && <span>{tweet.body}</span>}
                </StyledTweetText>
                <OneTweetIcons />
              </StyledOneTweetModel>
            </OneTweetContainer>
          </>
        );
      })}
    </StyledDisplayedContainer>
  );
};

export default TweetsFeed;
