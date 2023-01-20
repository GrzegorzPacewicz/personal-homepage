import styled from "styled-components";

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
/* 
  @media (max-width:${({theme})=> theme.breakpoint.large}px){
        grid-template-columns: auto auto;
        margin-top: 32px;
        margin-bottom: 72px;
    } */
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  padding: 5px;

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
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0 0 12px 0;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 36px 0;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px 0;
  text-align: justify;
  color: ${({ theme }) => theme.color.slateGray};
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
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
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

export const ThemeSwitch = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 16px;
  align-items: center;
  position: absolute;
  transition: all 0.5s;
`;

export const ThemeSwitchButton = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
  border: 1px solid rgba(209, 213, 218, 0.3);
  width: 47.06px;
  height: 25.07px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackgroundText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;
  display: grid;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    display: none;
  }
`;

export const Envelope = styled.img`
  margin: 0;
`;

export const LightTheme = styled.img`
  padding: 2px;
`;
