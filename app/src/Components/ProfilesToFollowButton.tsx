import { StyledProfileButton } from "./styles/StyledprofileButton";
import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTextContainer } from "./styles/ProfileButton/StyledTextContainer";
import { StyledContainerProfile } from "./styles/ProfileButton/StyledContainerProfile"; 
import FollowButton from "./FollowButton";

type ProfileButtonProps = {
    user: object,
}

const ProfilesToFollowButton: FunctionComponent<ProfileButtonProps> = ({user}) => {

 return (

        <StyledProfileButton>
            <Avatar someUrl={user.user1.image}/>
            <StyledContainerProfile>
            <StyledTextContainer>
                <ProfileName name={user.user1.name} />
                <ProfileNickName nickname={user.user1.userName}/>
            </StyledTextContainer>
                <FollowButton/>
            </StyledContainerProfile>
        </StyledProfileButton>
    )
}

export default ProfilesToFollowButton