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
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectRepos, selectReposStatus } from "./githubSlice";
import { useEffect } from "react";

const Portfolio = () => {
    const reposStatus = useSelector(selectReposStatus);
    const repos = useSelector(selectRepos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch])

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
                            key={repo.id}
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
