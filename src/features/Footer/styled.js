import styled from "styled-components";

export const FooterWrapper = styled.div`
  text-align: left;
  width: 60%;
  margin: 120px 8px;
  transition: background 1s linear, color 1s linear;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 48px 8px; 
    width: 100%;
  }
`;

export const FooterIntro = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.elementColor.footer.intro};
  margin: 24px 0;
  transition: background 1s linear, color 1s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
     margin: 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    margin: 12px 0;
  }
  `;

export const Email = styled.a`
  color: ${({ theme }) => theme.elementColor.footer.email};
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: background 1s linear, color 1s linear;

  &:hover {
    filter: brightness(120%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.elementColor.footer.text};
  margin: 24px 0 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    margin: 12px 0 0 0;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 56px 0 110px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    margin: 40px 0;
  }
  `;

export const Link = styled.a`
  color: ${({ theme }) => theme.elementColor.footer.text};
  text-decoration: none;
  transition: background 1s linear, color 1s linear;
`;

export const StyledIcon = (icon) => styled(icon)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.elementColor.footer.icon};
  transition: background 1s linear, color 1s linear;

  &:hover {
    fill: ${({ theme }) => theme.elementColor.footer.hover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;
