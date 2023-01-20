import {
  ThisIs,
  Details,
  HeaderWrapper,
  Photo,
  Name,
  Description,
  EmailLink,
  Envelope,
  ThemeSwitchButton,
  ThemeSwitch,
  BackgroundText,
  LightTheme,
} from "./styled";
import image from "./images/author.jpg";
import envelope from "./images/envelope.svg";
import light from "./images/light.svg";
import { email } from "../personalInfo";

const Header = () => (
  <HeaderWrapper>
    {" "}
    <ThemeSwitch>
      <BackgroundText>Dark mode off</BackgroundText>
      <ThemeSwitchButton>
        <LightTheme src={light} alt="" />
      </ThemeSwitchButton>
    </ThemeSwitch>
    <Photo src={image} alt="Grzegorza Pacewicza Photo" />
    <Details>
      <ThisIs>This is</ThisIs>
      <Name>Grzegorz Pacewicz</Name>
      <Description>
        👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Description>
      <EmailLink href={`mailto:${email}`} title={email}>
        <Envelope src={envelope} alt=""></Envelope>
        Hire me
      </EmailLink>{" "}
    </Details>
  </HeaderWrapper>
);

export default Header;
