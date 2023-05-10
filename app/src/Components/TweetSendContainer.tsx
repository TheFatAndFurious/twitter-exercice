import { StyledSendContainer } from "./styles/Main/Tweet/StyledSendContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const TweetSendContainer = () => {
    return (
        <StyledSendContainer>
            <FontAwesomeIcon icon={faSpinner} />
            <hr />
            <FontAwesomeIcon icon={faCirclePlus} />


        </StyledSendContainer>
    )
}

export default TweetSendContainer;