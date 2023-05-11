import { StyledOneTweetIcons, IconsList, OneIcon } from "./styles/Main/DisplayedTweets/StyledOneTweetIcons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faChartColumn, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const OneTweetIcons = () => {

    return (
        <StyledOneTweetIcons>
            <IconsList>
                <OneIcon>
                    <FontAwesomeIcon icon={faComment} />
                    <span>12</span>
                </OneIcon>
                <OneIcon>
                    <FontAwesomeIcon icon={faRetweet} />
                    <span>12</span>
                </OneIcon>
                <OneIcon>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>12</span>
                </OneIcon>
                <OneIcon>
                    <FontAwesomeIcon icon={faChartColumn} />
                    <span>12</span>
                </OneIcon>
                <OneIcon>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </OneIcon>
            </IconsList>
        </StyledOneTweetIcons>

    )
}

export default OneTweetIcons;