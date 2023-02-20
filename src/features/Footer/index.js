import { email, facebook, github, youtube, linkedin } from "../../core/personalInfo";
import githubIcon from "./mediaIcons/github.svg";
import youtubeIcon from "./mediaIcons/youtube.svg";
import facebookIcon from "./mediaIcons/facebook.svg";
import linkedinIcon from "./mediaIcons/linkedin.svg";
import {
  FooterWrapper,
  FooterTitle,
  Email,
  Content,
  IconsContainer,
  Link,
  Icon,
} from "./styled";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterTitle>Let`s Talk</FooterTitle>
        <Email href={`mailto:${email}`}>{email}</Email>
        <Content>
          I’m always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to contact me.
        </Content>

        <IconsContainer>
          <Link href={github}>
            <Icon src={githubIcon} alt="my github" />
          </Link>{" "}
          <Link href={facebook}>
            <Icon src={facebookIcon} alt="my facebook" />
          </Link>
          <Link href={linkedin}>
            <Icon src={linkedinIcon} alt="my linkedin" />
          </Link>
          <Link href={youtube}>
            <Icon src={youtubeIcon} alt="my youtube" />
          </Link>
        </IconsContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
