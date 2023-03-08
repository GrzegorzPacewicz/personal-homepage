import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 12px;
  align-items: center;
  transition: all 0.5s;
`;

export const ThemeSwitchButton = styled.div`
  background-color: ${({ theme }) =>
    theme.elementColor.switchButton.background};
  border: 1px solid ${({ theme }) => theme.elementColor.switchButton.border};
  transition: background 1s linear, color 1s linear;
  width: 48px;
  height: 25px;
  border-radius: 25%/50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 2px;
`;

export const BackgroundText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  width: 102px;
  color: ${({ theme }) => theme.elementColor.switchButton.text};
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    display: none;
  }
`;

export const SwitchElement = styled.img`
  background-color: ${({ theme }) =>
    theme.elementColor.switchButton.switchElement};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  transition: 0.5s;

  ${({ moveRight }) =>
    moveRight &&
    css`
      transform: translate(22px);
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    transform: translate(22px);
  }
`;
