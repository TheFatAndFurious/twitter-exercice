import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

type testProps = {
    path: IconProp
}


const Icon: FunctionComponent<testProps> = ({path}) => {
    return (
        <FontAwesomeIcon icon={path} size="xl"/>
    )
}

export default Icon