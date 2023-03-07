import styled, { css } from "styled-components";
import { SubHeader } from "../../common/SubHeader/styled";
import { ReactComponent as githubIcon } from "../../common/icons/github.svg";

export const PortfolioWrapper = styled.div`
  text-align: center;
  margin: 72px 0;
  word-break: break-word;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    margin: 60px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    margin: 48px 0;
  }
`;

export const PortfolioHeader = styled(SubHeader)`
  text-align: center;
  margin: 0 0 8px 0;
  padding-top: 8px;
  display: grid;
`;

export const Link = styled.a`
  text-decoration: none;
`;
export const GitHubIcon = styled(githubIcon)`
  width: 40px;
  height: 40px;
  transition: background 1s linear, color 1s linear;
  fill: ${({ theme }) => theme.elementColor.portfolio.icon};
`;

export const Lead = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};
  transition: background 1s linear, color 1s linear;
  margin: 0;
  padding-bottom: 24px;
`;

export const TilesWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  ${({ notSuccess }) => notSuccess && css`
        grid-template-columns: auto;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;