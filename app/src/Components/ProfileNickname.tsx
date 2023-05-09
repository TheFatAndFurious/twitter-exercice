import { StyledProfileNickname } from "./styles/ProfileButton/StyledProfileNickname";
import { FunctionComponent } from "react";

type ProfileNickNameProps = {
    nickname: string
}

const ProfileNickName: FunctionComponent<ProfileNickNameProps> = ({nickname}) => {

    return (
        <StyledProfileNickname>
            <span>{nickname}</span>
        </StyledProfileNickname>
    )
}

export default ProfileNickName