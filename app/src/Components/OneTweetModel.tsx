import { FunctionComponent } from "react"
import { StyledOneTweetModel } from "./styles/Main/DisplayedTweets/StyledOneTweetModel"
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledOneTweetUserInfo } from "./styles/Main/DisplayedTweets/StyledOneTweetUserInfo";
import { StyledTweetText } from "./styles/Main/DisplayedTweets/StyledTweetText";




type OneTweetModelProps = {
    contenu: string, 
    user: object
}

const OneTweetModel: FunctionComponent<OneTweetModelProps>  = ({contenu, user}) => {

    return (
        <StyledOneTweetModel>
            <StyledOneTweetUserInfo>
                <Avatar someUrl={user.image}/>
                <ProfileName name={user.name}/>
                <ProfileNickName nickname={user.userName}/>
            </StyledOneTweetUserInfo>
            <StyledTweetText>
            <span>{contenu}</span>
            </StyledTweetText>
        </StyledOneTweetModel>
    )
}


export default OneTweetModel;