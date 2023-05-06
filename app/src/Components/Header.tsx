import { StyledHeader, Nav, Logo, List } from "./styles/Header.styles"
import { ThemeProvider } from "styled-components"
import Button from "./Button"

const Header = () => {

return (

    <StyledHeader>
        <Nav >
            <List>
            <Button name="Home"/>
            <Button name="Explore"/>
            <Button name="Notifications"/>
            <Button name="Messages"/>
            <Button name="Lists"/>
            <Button name="Bookmarks"/>
            <Button name="Twitter Blue"/>
            <Button name="Profile"/>
            <Button name="More"/>
            <Button name="Tweet"/>
            <Button name="Mathieu"/>
                   
            </List>
        </Nav>
    </StyledHeader>

    )
}

export default Header