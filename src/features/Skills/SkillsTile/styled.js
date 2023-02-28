import styled from "styled-components";
import { boxShadow, borderRadius, divider } from "../../../core/theme";

export const SkillsWrapper = styled.div`
  max-width: 1216px;
  left: calc(50% - 1216px / 2 + 2px);
  background: ${({ theme }) => theme.elementColor.skills.background};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding-bottom: 32px;
`;

export const Icon = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 16px;
    line-height: 19px;
  }
  `;

export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin-left: 32px;
  margin-right: 32px;
  background: ${divider};
`;
export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: space-between;
  margin: 32px 0 0;
  grid-gap: 8px;
  padding-left: 0;
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.skills.text};
  margin: 0 32px;
  line-height: 1.4;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 17px;
  }
  
`;

export const Point = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 16px;
  background: ${({ theme }) => theme.elementColor.skills.point};
  flex-shrink: 0;
`;
