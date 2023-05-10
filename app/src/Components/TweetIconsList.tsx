import { IconsList } from "./styles/Main/Tweet/IconsList";
import { StyledIconsList } from "./styles/Main/Tweet/StyledIconsList";
import { Link } from "./styles/Link.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faGift, faPoll, faFaceSmile, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const TweetIconsList = () => {

    return (
        <StyledIconsList>
            <IconsList>
                <Link><FontAwesomeIcon icon= {faPhotoFilm}/></Link>
                <Link><FontAwesomeIcon icon= {faGift}/></Link>
                <Link><FontAwesomeIcon icon= {faPoll}/></Link>
                <Link><FontAwesomeIcon icon= {faFaceSmile}/></Link>
                <Link><FontAwesomeIcon icon= {faClock}/></Link>
                <Link><FontAwesomeIcon icon= {faLocationDot}/></Link>
            </IconsList>
        </StyledIconsList>
        
    )
}

export default TweetIconsList;