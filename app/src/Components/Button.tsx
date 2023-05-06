import { FunctionComponent } from "react"
import { Link } from "./styles/Link.style"
import { StyledButton } from "./styles/StyledButton"

type ButtonProps = {
    name: string
}

const Button: FunctionComponent<ButtonProps> = ({name}) => {
    return (

        <Link>
            <StyledButton>{name}</StyledButton>
        </Link>
    )
}

export default Button;