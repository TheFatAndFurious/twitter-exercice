import { StyledHeader, Nav, List } from "./styles/Header.styles"
import Button from "./Button"
import { faHouseUser, faHashtag, faBell, faEnvelope, faList, faBookmark, faCheck, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { StyledProfileContainer } from "./styles/StyledProfileContainer"
import ProfileButton from "./ProfileButton"
import FuiteButton from "./FuiteButton"
import { FunctionComponent } from "react"
import Icon from "./FontawesomeIcon"
import { Link } from "./styles/Link.style"
import Logo from "./Logo"


type HeaderProps = {
    user: object
}

const Header: FunctionComponent<HeaderProps> = ({user}) => {



return (

    <StyledHeader>
        <Nav >
            <List>
                <Logo />
                <Button name="Home" path={faHouseUser}/>
                <Button name="Explore" path={faHashtag}/>
                <Button name="Notifications"path={faBell}/>
                <Button name="Messages" path={faEnvelope}/>
                <Button name="Lists" path={faList}/>
                <Button name="Bookmarks" path={faBookmark}/>
                <Button name="Twitter Blue" path={faCheck}/>
                <Button name="Profile" path={faUser}/>
                <Button name="More" path={faEllipsis}/>
                <FuiteButton/>
            </List>
            <StyledProfileContainer>
                <ProfileButton path={faEllipsis} user={user}/>
            </StyledProfileContainer >                  
        </Nav>
    </StyledHeader>

    )
}

export default Header