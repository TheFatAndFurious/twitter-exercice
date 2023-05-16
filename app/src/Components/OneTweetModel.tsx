import { FunctionComponent, useContext } from "react"
import { StyledOneTweetModel } from "./styles/Main/DisplayedTweets/StyledOneTweetModel"
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledOneTweetUserInfo } from "./styles/Main/DisplayedTweets/StyledOneTweetUserInfo";
import { StyledTweetText } from "./styles/Main/DisplayedTweets/StyledTweetText";
import OneTweetIcons from "./OneTweetIcons";
import AppContext from "./AppContext";


type OneTweetModelProps = {
    contenu: object, 
    user: object, 
    
}

const OneTweetModel: FunctionComponent<OneTweetModelProps>  = ({contenu, user}) => {


    const { users, tweets } = useContext(AppContext);
console.log("🚀 ~ file: OneTweetModel.tsx:19 ~ tweets:", tweets)



    return (
        <StyledOneTweetModel>
            <StyledOneTweetUserInfo>
                <Avatar someUrl={user.image}/>
                <ProfileName name={user.name}/>
                <ProfileNickName nickname={user.userName}/>
            </StyledOneTweetUserInfo>
            <StyledTweetText>
            <span>{tweets[0].body}</span>
            </StyledTweetText>
            <OneTweetIcons/>

        </StyledOneTweetModel>
    )
}


export default OneTweetModel;