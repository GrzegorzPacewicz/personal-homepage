import styled from "styled-components";
import { SubHeader } from "../SubHeader/styled";

export const PortfolioWrapper = styled.div`
  text-align: center;
  margin: 72px 0;
`;

export const PortfolioHeader = styled(SubHeader)`
  text-align: center;
  margin: 0 0 8px 0;
  padding-top: 8px;
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

export const TileWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  box-sizing: border-box;
  min-height: 322px;
  background: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 56px;
  gap: 24px;
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin: 0;
  text-align: left;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGray};
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0;
`;

export const ProjectDemo = styled(ProjectDescription)`
 margin-top: 8px;
`;
