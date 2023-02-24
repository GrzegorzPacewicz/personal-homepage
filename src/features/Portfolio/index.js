import {github} from "../../core/personalInfo";
import GitHubTile from "./GitHubTile/index";
import {
    GitHubIcon,
    Lead,
    PortfolioHeader,
    PortfolioWrapper,
    TilesWrapper,
    Link,
} from "./styled";
import Loader from "./Loader";
import Error from "./Error";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
        <Link
            href={github}
            rel="noreferrer"
            target="_blank">
            <GitHubIcon title="github"/>
        </Link>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
        <Loader />
        <Error />
      <TilesWrapper>
        <GitHubTile /> <GitHubTile /> <GitHubTile /> <GitHubTile />
      </TilesWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
