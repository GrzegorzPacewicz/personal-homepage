import {
  ThisIs,
  Details,
  AboutWrapper,
  Photo,
  Name,
  Description,
  EmailLink,
  Envelope,
} from "./styled";
import image from "./images/author.jpg";
import envelope from "./images/envelope.svg";
import { email } from "../../../core/personalInfo";

const About = () => (
  <AboutWrapper>
    {" "}
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
  </AboutWrapper>
);

export default About;
