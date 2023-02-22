import {
  GitHubLogo,
  Lead,
  PortfolioHeader,
  PortfolioWrapper,
  TilesWrapper,
} from "./styled";
import GitHubTile from "./GitHubTile/index";
import GitIcon from "./GigIcon";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <GitHubLogo>
        {" "}
        <GitIcon />
      </GitHubLogo>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
      <TilesWrapper>
        <GitHubTile /> <GitHubTile /> <GitHubTile /> <GitHubTile />
      </TilesWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
