import styled from "styled-components";

export const SkillsWraper = styled.div`
  max-width: 1216px;
  left: calc(50% - 1216px / 2 + 2px);
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
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
