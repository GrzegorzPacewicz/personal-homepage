import styled from "styled-components";

export const SubHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0 32px;
  color: ${({ theme }) => theme.elementColor.subheader.title};
  display: flex;
  align-content: center;
  transition: background 1s linear, color 1s linear;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 26px;
    line-height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
