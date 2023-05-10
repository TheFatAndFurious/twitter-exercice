import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledFuiteButton } from "./styles/StyledFuiteButton";
import Icon from "./FontawesomeIcon";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FuiteButtonProps = {
    className: string
}

const FuiteButton:FunctionComponent<FuiteButtonProps> = () => {

    return (
        <StyledButtonLink>
        <StyledFuiteButton>
            <span>Tweet</span>  
            {window.innerWidth < 1265 &&<FontAwesomeIcon icon={faPenNib} size="xl"/>}
        </StyledFuiteButton>
        </StyledButtonLink>
    )
}

export default FuiteButton