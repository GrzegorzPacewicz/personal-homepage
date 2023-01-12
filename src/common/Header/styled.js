import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 4fr auto;
  margin-bottom: 64px;
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
`;

export const BasicInfoContainer = styled.div`
  display: grid;
  margin-left: 66px;
  align-self: center;
`;

export const HeaderParagraph = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
  margin-bottom: 12px;
`;

export const StyledHeader = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const HeaderText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 36px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const EmailLink = styled.a`
  font-weight: 600;
  font-size: 20.0584px;
  color: #ffffff;
  background-color: blue;

  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  max-width: fit-content;
  border-radius: 4px;
  margin-top: 32px;
  text-decoration: none;
  transition: 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
`;
