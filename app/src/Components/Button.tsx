import { FunctionComponent } from "react"
import { Link } from "./styles/Link.style"
import { StyledButton } from "./styles/StyledButton"
import { StyledButtonLink } from "./styles/StyledButtonLink"
import Icon from "./FontawesomeIcon"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { StyledName } from "./styles/StyledName"

type ButtonProps = {
    name: string,
    path: IconProp
}


/************
 *? Link: List element to contain every link from the navbar
 *? StyledButtonLink: a element to make every button a link even when the text is not displayed
 *? StyledButton: button element
 *? Icon: FontAwesome icons element
 *? Name: span element to display the button name *
 ************/

const Button: FunctionComponent<ButtonProps> = ({name, path}) => {
    return (

        <Link>
        <StyledButtonLink>
            <StyledButton>
                <Icon path={path}/> 
                <StyledName>{name}</StyledName>
            </StyledButton>
        </StyledButtonLink>
        </Link>
    )
}

export default Button;