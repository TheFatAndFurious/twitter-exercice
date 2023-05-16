import { StyledEveryOneCanReplyButton } from "./styles/Main/Tweet/StyledEveryOnecanReplyButton";
import { StyledCanReplyButton } from "./styles/Main/Tweet/StyledCanReplyButton";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledSendButton } from "./styles/Main/Tweet/StyledSendButton";
const TweetEveryoneCanReplyButton = () => { 

    const handleClick = () => {
        console.log("coucou")
    }

    return (
    <StyledEveryOneCanReplyButton>
        <StyledButtonLink>
            <StyledCanReplyButton>
                <span>🌎 Everyone can reply</span>
            </StyledCanReplyButton>
        </StyledButtonLink>
        <StyledSendButton onClick={handleClick}>
            <span>Tweet</span>
        </StyledSendButton >
    </StyledEveryOneCanReplyButton>
    )
}

export default TweetEveryoneCanReplyButton;