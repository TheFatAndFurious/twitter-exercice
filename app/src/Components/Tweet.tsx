import { StyledTweetContainer } from "./styles/Main/Tweet/StyledTweetContainer";
import { PictureContainer } from "./styles/Main/Tweet/PictureContainer";
import Avatar from "./Avatar";
import { FunctionComponent, useState } from "react";
import { BodyContainer } from "./styles/Main/Tweet/BodyContainer";
import TweetEveryOneButton from "./TweetEveryOneButton";
import TweetIconsList from "./TweetIconsList";
import TweetSendContainer from "./TweetSendContainer";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledCanReplyButton } from "./styles/Main/Tweet/StyledCanReplyButton";
import { StyledSendButton } from "./styles/Main/Tweet/StyledSendButton";
import { TextContainer } from "./styles/Main/Tweet/TextContainer";

type TweetProps = {
    user: object
}

const Tweet: FunctionComponent<TweetProps> = ({user}) => {

    const [body, setBody] = useState("");


    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/test", {
                method: "POST", 
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({body: body})
            });

            if (!response.ok) {
                throw new Error("erreur lors de l'envoi du tweet")
            }

            setBody("");
            window.location.reload();
        } catch (error) {
            console.error(error)
        }
    }

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
        <StyledSendButton onClick={handleClick}>
            <span>Tweet</span>
        </StyledSendButton >
        <StyledTweetContainer>
            <TweetIconsList />
            <TweetSendContainer/>
        </StyledTweetContainer>
        </>
    )
}

export default Tweet;