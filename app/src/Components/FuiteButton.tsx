import { StyledButtonLink } from "./styles/StyledButtonLink";
import { StyledFuiteButton } from "./styles/StyledFuiteButton";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FuiteButtonProps = {
    className: string
}

const FuiteButton:FunctionComponent<FuiteButtonProps> = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1265);

    useEffect(()=> {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1265);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <StyledButtonLink>
        <StyledFuiteButton>
            {isLargeScreen ? <span>Tweet</span> : <FontAwesomeIcon icon={faPenNib} size="xl"/>}
        </StyledFuiteButton>
        </StyledButtonLink>
    )
}

export default FuiteButton