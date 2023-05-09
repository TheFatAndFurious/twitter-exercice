import { StyledHeader, Nav, List } from "./styles/Header.styles"
import Button from "./Button"
import { faHouseUser, faHashtag, faBell, faEnvelope, faList, faBookmark, faCheck, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { StyledProfileContainer } from "./styles/StyledProfileContainer"
import ProfileButton from "./ProfileButton"
import FuiteButton from "./FuiteButton"


const Header = () => {

    const user = {
        name: "Karim",
        userName: "The menace",
        image: "https://www.parismatch.com/lmnr/f/webp/r/1144,763,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/03/18/16/1985GettyImagescouv.jpg?VersionId=rLNr_kuza9tM1dI_T1um4ra5Y58ySspK"
    }

return (

    <StyledHeader>
        <Nav >
            <List>
                <Button name={""} path={faTwitter}/>
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