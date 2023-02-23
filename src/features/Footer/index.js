import { email } from "../../core/personalInfo";
import {
  FooterWrapper,
  FooterIntro,
  Email,
  Content,
  IconsContainer,
  Link,
} from "./styled";

import { socialMedia } from "./socialMedia";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterIntro>Let`s Talk</FooterIntro>
        <Email href={`mailto:${email}`}>{email}</Email>
        <Content>
          I’m always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to contact me.
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
    </>
  );
};

export default Footer;
