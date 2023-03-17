import { email } from "../personalInfo";
import {
  FooterWrapper,
  FooterIntro,
  Email,
  Content,
  IconsContainer,
  Link,
} from "./styled";
import { socialMedia } from "./socialMedia";

const Footer = () =>
   (
    <FooterWrapper>

      <FooterIntro>Let`s Talk</FooterIntro>

        <Email href={`mailto:${email}`}>{email}</Email>

        <Content>
          I’m always open to new projects whenever I have the time. Feel free to contact me.
        </Content>

        <IconsContainer>
          {socialMedia.map(({ name, Icon, link }) => (
            <Link
              key={name}
              href={link}
              title={name}
              rel="noreferrer"
              target="_blank"
            >
              <Icon />
            </Link>
          ))}
        </IconsContainer>

      </FooterWrapper>
   );

export default Footer;
