import styled from "styled-components";

export const SubHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0px 32px;
  color: ${({ theme }) => theme.color.mineShaft};
  display: flex;
  align-content: center;
`;
