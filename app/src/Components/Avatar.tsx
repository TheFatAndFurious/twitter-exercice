import { StyledAvatar } from "./styles/ProfileButton/StyledAvatar";
import { FunctionComponent } from "react";

type ProfileButtonProps = {
    someUrl: string
}


const Avatar: FunctionComponent<ProfileButtonProps> = ({someUrl}) => {

    return (
        <StyledAvatar>
            <img src={someUrl}/>
        </StyledAvatar>
    )
}


export default Avatar