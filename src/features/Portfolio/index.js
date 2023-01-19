import {
  GitHubLogo,
  Lead,
  PortfolioHeader,
  PortfolioWrapper,
  TilesWrapper,
} from "./styled";
import logo from "./images/git.svg";
import Tile from "../../common/Tile/index";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <GitHubLogo src={logo} alt="GitHub Logo"></GitHubLogo>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
      <TilesWrapper>
        <Tile />
      </TilesWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
