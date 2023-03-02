import styled from "styled-components";
import { boxShadow, borderRadius } from "../../../core/theme";

export const AboutWrapper = styled.header`
  max-width: 1089px;
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 64px;
  margin-top: 119px;
  transition: background 1s linear, color 1s linear;
  
   @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
    margin-bottom: 0;
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
  transition: background 1s linear, color 1s linear;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 36px 0;
  color: ${({ theme }) => theme.elementColor.header.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 27px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px 0;
  text-align: justify;
  color: ${({ theme }) => theme.elementColor.header.description};
  transition: background 1s linear, color 1s linear;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 17px;
  }
`;

export const EmailLink = styled.a`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.elementColor.header.button};
  padding: 12px 16px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  max-width: fit-content;
  margin: 0;
  gap: 16px;
  text-decoration: none;
  transition: 0.3s, background 1s linear, color 1s linear;;
  letter-spacing: 0.05em;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    gap: 12px;
  }

  &:hover{
    box-shadow: 
    2px -2px 0 ${({ theme }) => theme.elementColor.header.link}, 
    -2px 2px 0 ${({ theme }) => theme.elementColor.header.link}, 
    2px 2px 0 ${({ theme }) => theme.elementColor.header.link}, 
    -2px -2px 0 ${({ theme }) => theme.elementColor.header.link};
  }
  &:focus{
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
    border-radius: ${borderRadius};
  }
`;

export const Envelope = styled.img`
  margin: 0;
  height: 20px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    height: 14px;
    };
`;

