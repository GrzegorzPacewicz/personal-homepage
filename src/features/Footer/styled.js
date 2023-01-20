import styled from "styled-components";

export const FooterWrapper = styled.div`
  text-align: left;

  margin: 120px 8px 0 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const FooterTitle = styled.p`
  margin: 20px 0 0 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
  margin-bottom: 24px;
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-decoration: none;
  //
  transition: color 0.3s;

  &:hover {
    filter: brightness(120%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 24px 0 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 56px 0 110px 0;
`;

export const Link = styled.a``;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;
