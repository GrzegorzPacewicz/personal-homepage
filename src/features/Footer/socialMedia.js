
import {github, facebook, linkedin, youtube } from "../../core/personalInfo";
import { ReactComponent as githubIcon } from "./mediaIcons/github.svg";
import { ReactComponent as facebookIcon } from "./mediaIcons/facebook.svg";
import { ReactComponent as linkedinIcon } from "./mediaIcons/linkedin.svg";
import { ReactComponent as youtubeIcon } from "./mediaIcons/2.svg";
import { StyledIcon } from "./styled";

export const socialMedia = [
    {
        name: "github",
        link: {github},
        Icon: StyledIcon(githubIcon),
    },
    {
        name: "facebook",
        link: {facebook},
        Icon: StyledIcon(facebookIcon),
    },

    {
        name: "linkedin",
        link: {linkedin},
        Icon: StyledIcon(linkedinIcon),
    },
    {
        name: "youtube",
        link: {youtube},
        Icon: StyledIcon(youtubeIcon),
    },
];