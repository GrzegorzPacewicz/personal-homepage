import GitHubTile from "./Tile/index";
import Loader from "./Loader";
import Error from "./Error";
import { github } from "../personalInfo";
import {
    GitHubIcon,
    Lead,
    PortfolioHeader,
    PortfolioWrapper,
    TilesWrapper,
    Link,
} from "./styled";
import { useSelector } from "react-redux";
import { selectRepos, selectReposStatus } from "./githubSlice";
import { nanoid } from "@reduxjs/toolkit";

const Portfolio = () => {
    const reposStatus = useSelector(selectReposStatus);
    const repos = useSelector(selectRepos);

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
           <TilesWrapper
            notSuccess={ reposStatus !== "success" }>
           {
              reposStatus === "error"
              ? <Error />
              : reposStatus === "loading"
              ? <Loader />
                  : repos.map((repo) =>
                          <GitHubTile as="li"
                            key={nanoid()}
                            description={repo.description}
                            name={repo.name}
                            demo={repo.homepage}
                            gitUrl={repo.html_url}
                          />)
            }
            </TilesWrapper>
     </PortfolioWrapper>
  );
};

export default Portfolio;
