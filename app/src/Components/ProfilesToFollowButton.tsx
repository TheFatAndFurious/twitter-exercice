import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTextContainer } from "./styles/ProfileButton/StyledTextContainer";
import { StyledContainerProfile } from "./styles/ProfileButton/StyledContainerProfile"; 
import FollowButton from "./FollowButton";
import { ProfileContainer } from "./styles/Main/Trending/StyledFollowButton";

type ProfileButtonProps = {
    user: object,
}

const ProfilesToFollowButton: FunctionComponent<ProfileButtonProps> = ({user}) => {

 return (

       <>
       <ProfileContainer>
            <Avatar someUrl={user.image}/>
            <StyledContainerProfile>
            <StyledTextContainer>
                <ProfileName name={user.name} />
                <ProfileNickName nickname={user.userName}/>
            </StyledTextContainer>
                <FollowButton/>
            </StyledContainerProfile>
        </ProfileContainer>
        <ProfileContainer>
            <Avatar someUrl={user.image}/>
            <StyledContainerProfile>
            <StyledTextContainer>
                <ProfileName name={user.name} />
                <ProfileNickName nickname={user.userName}/>
            </StyledTextContainer>
                <FollowButton/>
            </StyledContainerProfile>
        </ProfileContainer>
        </>
    )
}

export default ProfilesToFollowButton