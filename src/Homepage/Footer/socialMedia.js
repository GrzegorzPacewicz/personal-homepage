import { github, facebook, linkedin, youtube } from "../../common/personalInfo";
import { ReactComponent as githubIcon } from "../../common/icons/github.svg";
import { ReactComponent as facebookIcon } from "./mediaIcons/facebook.svg";
import { ReactComponent as linkedinIcon } from "./mediaIcons/linkedin.svg";
import { ReactComponent as youtubeIcon } from "./mediaIcons/youtube.svg";
import { StyledIcon } from "./styled";

export const socialMedia = [
  {
    name: "github",
    link: `${github}`,
    Icon: StyledIcon(githubIcon),
  },
  {
    name: "facebook",
    link: `${facebook}`,
    Icon: StyledIcon(facebookIcon),
  },

  {
    name: "linkedin",
    link: `${linkedin}`,
    Icon: StyledIcon(linkedinIcon),
  },
  {
    name: "youtube",
    link: `${youtube}`,
    Icon: StyledIcon(youtubeIcon),
  },
];
