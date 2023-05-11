import { StyledProfileButton } from "./styles/StyledprofileButton";
import { FunctionComponent } from "react";
import Icon from "./FontawesomeIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTextContainer } from "./styles/ProfileButton/StyledTextContainer";
import { StyledContainerProfile } from "./styles/ProfileButton/StyledContainerProfile"; 

type ProfileButtonProps = {
    user: object,
    path: IconProp
}

const ProfileButton: FunctionComponent<ProfileButtonProps> = ({user, path}) => {

 return (

        <StyledProfileButton>
            <Avatar someUrl={user.image}/>
            <StyledContainerProfile>
            <StyledTextContainer>
                <ProfileName name={user.name} />
                <ProfileNickName nickname={user.userName}/>
            </StyledTextContainer>
            <Icon path={path} />
            </StyledContainerProfile>
        </StyledProfileButton>
    )
}

export default ProfileButton