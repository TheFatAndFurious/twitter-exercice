import { StyledProfileButton } from "./styles/StyledprofileButton";
import { FunctionComponent } from "react";
import Icon from "./FontawesomeIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTextContainer } from "./styles/ProfileButton/StyledTextContainer";
type ProfileButtonProps = {
    user: object,
    path: IconProp
}

const ProfileButton: FunctionComponent<ProfileButtonProps> = ({user, path}) => {

 return (

        <StyledProfileButton>
            <Avatar someUrl={user.image}/>
            <StyledTextContainer>
                <ProfileName name={user.name} />
                <ProfileNickName nickname={user.userName}/>
            </StyledTextContainer>
            <Icon path={path} />
        </StyledProfileButton>
    )
}

export default ProfileButton