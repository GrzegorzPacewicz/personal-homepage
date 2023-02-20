import styled from "styled-components";
import { boxShadow, borderRadius, divider } from "../../../common/theme/theme";

export const SkillsWraper = styled.div`
  max-width: 1216px;
  left: calc(50% - 1216px / 2 + 2px);
  background: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0 32px;
  line-height: 1.4;
  display: flex;
  align-items: center;
`;

export const Point = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 16px;
  background: ${({ theme }) => theme.color.scienceBlue};
  flex-shrink: 0;
`;