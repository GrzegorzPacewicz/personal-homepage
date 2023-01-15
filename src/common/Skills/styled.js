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
  /* My skillset includes */
  /* H2 */

  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0px 32px;

  /* Black text */

  color: #252525;
`;

export const Span = styled.span`
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

  /* Diff/bg-neutral

Source: gray-300
*/
  background: rgba(209, 213, 218, 0.3);
`;
export const ListWrapper = styled.ul`
  /* Skills */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 115px;
  
`;

export const List = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: 0.05em;

  /* Text secondary */

  color: #6e7e91;
  margin: 0 32px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: blue;
  
`;
