import { StyledSendButton } from "./styles/Main/Tweet/StyledSendButton";



const SendButton = () => {

    const handleClick = () => {
        console.log("coucou")
    }

    return (
        <StyledSendButton onClick={handleClick}>
            <span>Tweet</span>
        </StyledSendButton >
    )
}

export default SendButton;