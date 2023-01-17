import styled from "styled-components";

export const SkillsWraper = styled.div`
  max-width: 1216px;
  min-height: 404px;
  left: calc(50% - 1216px / 2 + 2px);
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const SubHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0px 32px;
  color: #252525;
`;

export const Icon = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin-left: 32px;
  margin-right: 32px;
  background: rgba(209, 213, 218, 0.3);
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
  color: #6e7e91;
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
  background: #0366d6;
  flex-shrink: 0;
`;
