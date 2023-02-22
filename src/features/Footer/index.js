import {
  email,
  facebook,
  github,
  youtube,
  linkedin,
} from "../../core/personalInfo";
import {
  FooterWrapper,
  FooterIntro,
  Email,
  Content,
  IconsContainer,
  Link,
  Icon,
} from "./styled";
import GitIcon from "./mediaIcons/GitIcon";
import FacebookIcon from "./mediaIcons/Facebook";
import LinkedInIcon from "./mediaIcons/LinkedIn";
import YoutubeIcon from "./mediaIcons/Youtube";

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
          <Link href={github}>
            <Icon>
              <GitIcon />
            </Icon>
          </Link>{" "}
          <Link href={facebook}>
            <Icon>
              <FacebookIcon />
            </Icon>
          </Link>
          <Link href={linkedin}>
            <Icon>
              <LinkedInIcon />{" "}
            </Icon>
          </Link>
          <Link href={youtube}>
            <Icon>
              <YoutubeIcon />
            </Icon>
          </Link>
        </IconsContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
