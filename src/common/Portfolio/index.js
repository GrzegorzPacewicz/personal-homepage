import { GitHubLogo, Lead, PortfolioHeader, PortfolioWrapper } from "./styled";
import logo from "./images/git.svg"

const Portfolio = () => {
  return (
    <PortfolioWrapper>
        <GitHubLogo src={logo} alt="GitHub Logo"></GitHubLogo>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <Lead>My recent projects</Lead>
    </PortfolioWrapper>
  );
};

export default Portfolio;
