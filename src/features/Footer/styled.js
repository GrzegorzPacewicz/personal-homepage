import styled from "styled-components";

export const FooterWrapper = styled.div`
  text-align: left;
  width: 60%;
  margin: 120px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const FooterIntro = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({theme}) => theme.elementColor.footer.intro};
  margin: 20px 0 24px;
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.elementColor.footer.email};
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    filter: brightness(120%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
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
    font-size: 12px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 56px 0 110px 0;
`;

export const Link = styled.a`
  color: ${({theme}) => theme.elementColor.footer.text};
  text-decoration: none;
  transition: color .3s;

  `;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
`;

export const StyledIcon = (icon) => styled(icon)`  
    width: 48px;
    height: 48px;
    fill: ${({ theme }) => theme.elementColor.footer.logo};
    transition: fill .3s;
`;