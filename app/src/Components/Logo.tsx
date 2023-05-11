import { Link } from "./styles/Link.style";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Icon from "./FontawesomeIcon";
import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledLogoContainer } from "./styles/StyledLogoContainer";



const Logo = () => {

    return (
        <StyledLogoContainer>
            <StyledButtonLink>
                <Link>
                    <Icon path={faTwitter}/>
                </Link>
            </StyledButtonLink>
        </StyledLogoContainer>
    )
}


export default Logo;