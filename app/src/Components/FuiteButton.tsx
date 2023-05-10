import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledFuiteButton } from "./styles/StyledFuiteButton";
import Icon from "./FontawesomeIcon";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";


const FuiteButton = () => {

    return (
        <StyledButtonLink>
        <StyledFuiteButton>
            <span>Fuite !</span>
            <Icon path={faPenNib} />
        </StyledFuiteButton>
        </StyledButtonLink>
    )
}

export default FuiteButton