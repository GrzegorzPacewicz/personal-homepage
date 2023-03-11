import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.elementColor.site.background};
  color: ${({ theme }) => theme.elementColor.site.text};
  transition: background 0.5s linear, color 0.5s linear;
`;

export const AppContainer = styled.div`
  margin: auto;
  max-width: 1216px;
  padding: 119px 16px 109px;

 @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  padding: 32px 8px 0;
 }
 `;

