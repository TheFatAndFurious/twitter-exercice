import { EveryoneButtonContainer } from "./styles/Main/Tweet/EveryoneButtonContainer";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { EveryOneButton } from "./styles/Main/Tweet/EveryOneButton";   



const TweetEveryOneButton  = () => {

    return(

    <EveryoneButtonContainer>
        <StyledButtonLink>
            <EveryOneButton>
                <span>Everyone 🔽 </span>
            </EveryOneButton>
        </StyledButtonLink>
    </EveryoneButtonContainer>
    )
}


export default TweetEveryOneButton