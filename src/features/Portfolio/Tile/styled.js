import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../core/theme";

export const TileWrapper = styled.div`
  background: ${({ theme }) => theme.elementColor.portfolio.background};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: 56px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  text-align: justify;

  :hover {
    border: 6px solid ${({ theme }) => theme.color.githubTileHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    padding: 36px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 16px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.portfolio.title};
  margin: 0;
  margin-bottom: 24px;
  order: 0;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.elementColor.portfolio.description};
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 0 0 8px 0;
  }
`;

export const Demo = styled(Description)`
  margin: 8px 0 0 0;
  order: 2;
  flex-grow: 0;
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Repo = styled(Description)`
  margin: 8px 0 0 0;
  order: 3;
  flex-grow: 0;
  display: block;
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.elementColor.portfolio.link};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.githubTileHover};
  transition: filter 0.3s;

  //
  display: inline;

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;