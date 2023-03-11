import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 16px;
 `;

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.elementColor.site.background};
  transition: background 0.5s linear, color 0.5s linear;
`;