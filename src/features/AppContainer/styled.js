import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.elementColor.background};
  transition: background 1s linear, color 1s linear;
  `;
