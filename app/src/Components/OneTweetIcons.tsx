import {
  StyledOneTweetIcons,
  IconsList,
  OneIcon,
} from "./styles/Main/DisplayedTweets/StyledOneTweetIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faChartColumn,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { counter } from "@fortawesome/fontawesome-svg-core";

const OneTweetIcons = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  const [liked, setLiked] = useState(false);

  const like = () => {
    setLikeCounter(likeCounter + 1);
    setLiked(true);
  };

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
        <button onClick={like}>
          <OneIcon>
            <FontAwesomeIcon
              icon={faHeart}
              style={liked ? { color: "red" } : {}}
            />
            <span>{likeCounter}</span>
          </OneIcon>
        </button>
        <OneIcon>
          <FontAwesomeIcon icon={faChartColumn} />
          <span>12</span>
        </OneIcon>
        <OneIcon>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </OneIcon>
      </IconsList>
    </StyledOneTweetIcons>
  );
};

export default OneTweetIcons;
