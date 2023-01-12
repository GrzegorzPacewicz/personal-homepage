import {
  HeaderParagraph,
  BasicInfoContainer,
  HeaderWrapper,
  Image,
  StyledHeader,
  HeaderText,
  EmailLink,
} from "./styled";
import image from "./GP2.jpg";

const Header = () => (
  <HeaderWrapper>
    <Image src={image} alt="Grzegorza Pacewicza Photo" />
    <BasicInfoContainer>
      <HeaderParagraph>This is</HeaderParagraph>
      <StyledHeader>Grzegorz Pacewicz</StyledHeader>
      <HeaderText>
        👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </HeaderText>
      <EmailLink>Hire me</EmailLink>
    </BasicInfoContainer>
  </HeaderWrapper>
);

export default Header;
