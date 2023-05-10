import { StyledEveryOneCanReplyButton } from "./styles/Main/Tweet/StyledEveryOnecanReplyButton";
import { StyledCanReplyButton } from "./styles/Main/Tweet/StyledCanReplyButton";
import { StyledButtonLink } from "./styles/StyledButtonLink";

const TweetEveryoneCanReplyButton = () => { 

    return (
    <StyledEveryOneCanReplyButton>
        <StyledButtonLink>
            <StyledCanReplyButton>
                <span>🌎 Everyone can reply</span>
            </StyledCanReplyButton>
        </StyledButtonLink>
    </StyledEveryOneCanReplyButton>
    )
}

export default TweetEveryoneCanReplyButton;