import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 1fr;
  transition: background 1s linear, color 1s linear;
  
   @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    margin: 32px 0 0;   
  }
`;