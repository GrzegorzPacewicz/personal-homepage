import {
  GitHubLogo,
  Lead,
  PortfolioHeader,
  PortfolioWrapper,
  TilesWrapper,
} from "./styled";
import logo from "./images/git.svg";
import GitHubTile from "../../common/GitHubTile/index";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <GitHubLogo src={logo} alt="GitHub Logo"></GitHubLogo>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
      <TilesWrapper>
        <GitHubTile />
      </TilesWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
