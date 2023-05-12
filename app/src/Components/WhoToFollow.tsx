import { StyledTrending } from "./styles/Main/Trending/StyledTrending"
import ProfilesToFollowButton from "./ProfilesToFollowButton"
import { FunctionComponent } from "react"

type WhoToFollowProps = {
    user: object
}

const WhoToFollow:FunctionComponent<WhoToFollowProps> = ({user}) => {

    return (
        <StyledTrending>
            <h3>Who to follow</h3>
            <ProfilesToFollowButton user={user} />
        </StyledTrending>
    )
}

export default WhoToFollow