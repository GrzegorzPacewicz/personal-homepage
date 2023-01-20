import styled from "styled-components";
import { borderRadius, boxShadow } from "../propsCSS";

export const TileWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  color: ${({ theme }) => theme.color.mineshaft};
  padding: 56px;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 24px 0;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin: 0;
  text-align: left;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Description = styled.p`
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
`;

export const Demo = styled(Description)`
  margin: 8px 0 0 0;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const Repo = styled(Description)`
  margin: 8px 0 0 0;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-bottom: 1px solid;

  &:hover {
  }
`;
