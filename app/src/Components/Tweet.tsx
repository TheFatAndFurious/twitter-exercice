import { StyledTweetContainer } from "./styles/Main/Tweet/StyledTweetContainer";
import { PictureContainer } from "./styles/Main/Tweet/PictureContainer";
import { FunctionComponent, useContext, useState } from "react";
import { BodyContainer } from "./styles/Main/Tweet/BodyContainer";
import TweetEveryOneButton from "./TweetEveryOneButton";
import TweetIconsList from "./TweetIconsList";
import TweetSendContainer from "./TweetSendContainer";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledCanReplyButton } from "./styles/Main/Tweet/StyledCanReplyButton";
import {
  StyledSendButton,
  StyledSpan,
} from "./styles/Main/Tweet/StyledSendButton";
import { TextContainer } from "./styles/Main/Tweet/TextContainer";
import axios from "axios";
import Avatar from "./Avatar";
import TweetsFeed from "./TweetsFeed";
import AppContext from "./AppContext";

type TweetProps = {
  user: object;
};

const Tweet: FunctionComponent<TweetProps> = ({ user }) => {
  //? DECLENCHEUR DE MISE A JOUR POUR LES TWEETS
  const { setTweets } = useContext(AppContext);

  //? INITIALISATION DU CONTENU DE BASE DE TWEET A UN STRING VIDE
  const [body, setBody] = useState("");

  const handleClick = async () => {
    try {
      //? ENVOI DU CONTENU (BODY) DU TWEET A L'API
      const response = await axios.post("http://localhost:3000/test", { body });
      //? FONCTION QUI REMET A JOUR LE TABLEAU DES TWEETS
      updateTweets();
    } catch (error) {
      console.error(error);
    }
    //? ON REINITIALISE LE BODY UNE FOIS LE TWEET ENVOYE
    setBody("");
  };
  //? FONCTION POUR REMETTRE A JOUR LA LISTE DES TWEETS APRES AVOIR INSERE LE NOUVEAU TWEET
  const updateTweets = async () => {
    try {
      const response = await fetch("http://localhost:3000/tweets");
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error(error);
    }
  };

  //? ON RECUPERE DANS LA VARIABLE LE CONTENU DU TWEET SAISI DANS LA TEXTAREA
  const handleTextAreaChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <>
      <StyledTweetContainer>
        <PictureContainer>
          <Avatar someUrl={user.user1.image} />
        </PictureContainer>
        <BodyContainer>
          <TweetEveryOneButton />
        </BodyContainer>
      </StyledTweetContainer>
      <TextContainer>
        <textarea
          placeholder="What's happening?"
          maxLength={100}
          value={body}
          onChange={handleTextAreaChange}
        />
      </TextContainer>
      <StyledButtonLink>
        <StyledCanReplyButton>
          <span>🌎 Everyone can reply</span>
        </StyledCanReplyButton>
      </StyledButtonLink>
      <StyledSendButton disabled={body === ""} onClick={handleClick}>
        <StyledSpan>Tweet</StyledSpan>
      </StyledSendButton>
      <StyledTweetContainer>
        <TweetIconsList />
        {body && <TweetSendContainer />}
      </StyledTweetContainer>
      <TweetsFeed />
    </>
  );
};

export default Tweet;
