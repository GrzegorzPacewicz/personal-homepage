import styled from "styled-components";
import { boxShadow, borderRadius } from "../../common/theme/theme";

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 4fr auto;
  margin-bottom: 64px;
  margin-top: 119px;
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
    margin-bottom: 0px;
  }
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 320px;
    height: 320px;
    margin-bottom: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 200px;
    height: 200px;
    margin-bottom: 13px;
  }
`;

export const Details = styled.div`
  display: grid;
  margin-left: 66px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-row-start: 2;
    margin-left: 0;
  }
`;

export const ThisIs = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.elementColor.header.description};
  margin: 0 0 12px 0;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 36px 0;
  color: ${({ theme }) => theme.elementColor.header.text};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px 0;
  text-align: justify;
  color: ${({ theme }) => theme.elementColor.header.description};
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 17px;
  }
`;

export const EmailLink = styled.a`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  padding: 12px 16px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  max-width: fit-content;
  margin: 0;
  gap: 16px;
  text-decoration: none;
  transition: 0.3s;
  letter-spacing: 0.05em;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
`;

export const Envelope = styled.img`
  margin: 0;
`;
