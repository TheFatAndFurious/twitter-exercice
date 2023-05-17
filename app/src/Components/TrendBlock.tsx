import { useContext } from "react";
import AppContext from "./AppContext";
import {
  StyledTrendBlock,
  StyledTrendCat,
  StyledKeyword,
  StyledTrendNum,
} from "./styles/Main/Trending/StyledTrendBlock";

const TrendBlock = () => {
  const { trends } = useContext(AppContext);

  return trends.map((trend) => (
    <StyledTrendBlock key={trend.id}>
      <StyledTrendCat>Trending in {trend.location}</StyledTrendCat>
      <StyledKeyword>#{trend.title}</StyledKeyword>
      <StyledTrendNum>{trend.number}k</StyledTrendNum>
    </StyledTrendBlock>
  ));
};

export default TrendBlock;
