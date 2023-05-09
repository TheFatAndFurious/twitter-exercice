import { FunctionComponent } from "react"
import { StyledProfileName } from "./styles/ProfileButton/StyledProfileName"

type ProfileNameProps = {
    name: string
}


const ProfileName: FunctionComponent<ProfileNameProps> = ({name}) => {

    return (

        <StyledProfileName>
            <span>{name}</span>
        </StyledProfileName>
    )
}

export default ProfileName 