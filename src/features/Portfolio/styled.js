import styled from "styled-components";
import { SubHeader } from "../../common/SubHeader/styled";

export const PortfolioWrapper = styled.div`
  text-align: center;
  margin: 72px 0;
`;

export const PortfolioHeader = styled(SubHeader)`
  text-align: center;
  margin: 0 0 8px 0;
  padding-top: 8px;
  display: grid;
`;

export const GitHubLogo = styled.img`
  margin: 0;
`;

export const Lead = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;
  padding-bottom: 24px;
`;

export const TilesWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

