import { StyledTweetContainer } from "./styles/Main/Tweet/StyledTweetContainer";
import { PictureContainer } from "./styles/Main/Tweet/PictureContainer";
import Avatar from "./Avatar";
import React, { FunctionComponent, createContext, useState } from "react";
import { BodyContainer } from "./styles/Main/Tweet/BodyContainer";
import TweetEveryOneButton from "./TweetEveryOneButton";
import TweetIconsList from "./TweetIconsList";
import TweetSendContainer from "./TweetSendContainer";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledCanReplyButton } from "./styles/Main/Tweet/StyledCanReplyButton";
import { StyledSendButton, StyledSpan } from "./styles/Main/Tweet/StyledSendButton";
import { TextContainer } from "./styles/Main/Tweet/TextContainer";
import axios from "axios";






type TweetProps = {
    user: object
}

const Tweet: FunctionComponent<TweetProps> = ({user}) => {

    const [body, setBody] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [newTweet, setNewtweet] = useState(false)


    const handleClick = async () => {
        try {
          setIsLoading(true); 
          const response = await axios.post("http://localhost:3000/test", { body });
          
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
        setBody("");
        setIsLoading(false)
        setNewtweet(true);
      };

    const handleTextAreaChange = (event) => {
        setBody(event.target.value);
    }

    return (       
       <>
       <StyledTweetContainer>
            <PictureContainer>
            <Avatar someUrl={user.user1.image}/>
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
        </StyledSendButton >
        <StyledTweetContainer>
            <TweetIconsList />
            <TweetSendContainer/>
        </StyledTweetContainer>
        </>
        )
        
        }
    


export default Tweet;