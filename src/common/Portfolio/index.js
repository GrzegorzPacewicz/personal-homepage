import {
  GitHubLogo,
  Lead,
  PortfolioHeader,
  PortfolioWrapper,
  ProjectWrapper,
  Tile,
  TileWrapper,
  ProjectTitle,
  ProjectDescription,
  ProjectDemo,
} from "./styled";
import logo from "./images/git.svg";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <GitHubLogo src={logo} alt="GitHub Logo"></GitHubLogo>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
      <TileWrapper>
        <Tile>
          <ProjectWrapper>
            <ProjectTitle>Tittle</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectDemo>Demo:</ProjectDemo>
          </ProjectWrapper>
        </Tile>{" "}
        <Tile>Lorem Ips</Tile>
      </TileWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
