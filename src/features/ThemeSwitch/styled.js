import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 16px;
  align-items: center;
  position: absolute;
  transition: all 0.5s;
`;

export const ThemeSwitchButton = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
  border: 1px solid rgba(209, 213, 218, 0.3);
  width: 47.06px;
  height: 25.07px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackgroundText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;
  display: grid;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    display: none;
  }
`;

export const LightTheme = styled.img`
  padding: 2px;
`;
