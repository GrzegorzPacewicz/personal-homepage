import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 4fr auto;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    grid-template-columns: 1fr;
    margin-bottom: 56px;
  }
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 200px;
    height: 200px;
  }
`;

export const Details = styled.div`
  display: grid;
  margin-left: 66px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}) {
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
  margin-bottom: 12px;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 36px;
  color: ${({ theme }) => theme.color.slateGray};
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
  margin-top: 32px;
  gap: 16px;
  text-decoration: none;
  transition: 0.3s;
  letter-spacing: 0.05em;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 16px;
  align-items: center;
  position: absolute;

  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // padding: 0px;
  // gap: 12px;

  transition: all 0.5s;
`;

export const ThemeSwitchButton = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
  border: 1px solid rgba(209, 213, 218, 0.3);
  width: 47.06px;
  height: 25.07px;
  border-radius: 30px;
  display: grid;
  align-content: center;
  cursor: pointer;


// // /* Light grey */

// background: ${({ theme }) => theme.color.lightGray};
// /* Diff/bg-neutral


// */
// border: 1px solid rgba(209, 213, 218, 0.3);
`;

export const BackgroundText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;
  display: grid;
  align-content: center;
`;

export const Envelope = styled.img``;
