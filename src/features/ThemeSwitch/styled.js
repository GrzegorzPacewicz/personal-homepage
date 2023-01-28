import styled, { css } from "styled-components";

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
  padding: 2px;
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

export const SwitchElement = styled.img`
  background-color: ${({ theme }) => theme.color.mineShaft};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 2px;
  transition: 0.3s;

  ${({ moveRight }) =>
    moveRight &&
    css`
      transform: translate(22px);
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    transform: translate(22px);
  }
`;
