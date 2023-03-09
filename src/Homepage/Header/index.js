import {
  ThisIs,
  Details,
  HeaderWrapper,
  Photo,
  Name,
  Description,
  EmailLink,
  Envelope,
} from "./styled";
import image from "./images/author.jpg";
import envelope from "./images/envelope.svg";
import { email } from "../personalInfo";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ theme, toggleTheme }) => (
  <HeaderWrapper>

    <Photo src={image} alt="Grzegorz Pacewicz Photo" />

    <Details>
      <ThisIs>This is</ThisIs>

      <Name>Grzegorz Pacewicz</Name>

      <Description>
        👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Description>

      <EmailLink href={`mailto:${email}`} title={email}>
        <Envelope src={envelope} alt=""/>
        Hire me
      </EmailLink>

    </Details>

    <ThemeSwitch  theme={theme} toggleTheme={toggleTheme}/>

  </HeaderWrapper>
);

export default Header;
