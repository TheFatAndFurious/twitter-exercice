import { StyledTweetContainer } from "./styles/Main/Tweet/StyledTweetContainer";
import { PictureContainer } from "./styles/Main/Tweet/PictureContainer";
import Avatar from "./Avatar";
import { FunctionComponent } from "react";
import { BodyContainer } from "./styles/Main/Tweet/BodyContainer";
import TweetEveryOneButton from "./TweetEveryOneButton";
import TweetTextArea from "./TweetTextArea";

type TweetProps = {
    user: object
}

const Tweet: FunctionComponent<TweetProps> = ({user}) => {


    return (
        <>
        <StyledTweetContainer>
            <PictureContainer>
            <Avatar someUrl={user.image}/>
            </PictureContainer>
            <BodyContainer>
                <TweetEveryOneButton />
            </BodyContainer>
        </StyledTweetContainer>
                <TweetTextArea / >
        </>
       
    )
}

export default Tweet;