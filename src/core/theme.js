const color = {
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  semiDark: "#363636",
  scienceBlue: "#0366D6",
  blue: "#2517EB",
  dodgerBlue: "#2188FF",
  githubTileHover: "rgba(3, 102, 214, 0.5)",
  anakiwa: "#8CC2FF",
  // boxShadow:
  //   "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  // borderRadius: "4px",
  // border: "rgba(209, 213, 218, 0.3)",
  // divider: "rgba(209, 213, 218, 0.3)",
};

const breakpoint = {
  mobile: 320,
  bigMobile: 480,
  mobileMax: 767,
  bigScreen: 1024,
};

export const theme = {
  elementColor: {
    site: {
      background: color.whiteLilac,
    },
    header: {
      text: color.mineShaft,
      description: color.slateGray,
      button: color.scienceBlue,
      link: color.anakiwa,
    },
    subheader: {
      title: color.mineShaft,
    },
    skills: {
      background: color.white,
      text: color.slateGray,
      point: color.blue,
    },
    portfolio: {
      icon: color.blue,
      background: color.white,
      title: color.blue,
      description: color.slateGray,
      link: color.blue,
      underline: color.blue,
      text: color.mineShaft,
      danger: color.mineShaft,
      button: color.scienceBlue,
    },
    footer: {
      intro: color.slateGray,
      email: color.mineShaft,
      text: color.mineShaft,
      logo: color.mineShaft,
      hover: color.scienceBlue,
    },
  },
  color,
  breakpoint,
};

export const darkTheme = {
  elementColor: {
    site: {
      background: color.mineShaft,
    },
    header: {
      text: color.white,
      description: color.white,
      button: color.dodgerBlue,
    },
    skills: {
      background: color.semiDark,
      text: color.white,
      point: color.dodgerBlue,
    },
    subheader: {
      title: color.white,
    },
    portfolio: {
      icon: color.dodgerBlue,
      background: color.semiDark,
      title: color.white,
      description: color.white,
      link: color.dodgerBlue,
      underline: color.dodgerBlue,
      text: color.white,
      danger: color.white,
      button: color.dodgerBlue,
    },
    footer: {
      intro: color.white,
      email: color.white,
      text: color.white,
      icon: color.white,
      hover: color.dodgerBlue,
    },
  },
  color,
  breakpoint,
};

export const boxShadow =
  "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)";

export const borderRadius = "4px";

export const border = "rgba(209, 213, 218, 0.3)";

export const divider = "rgba(209, 213, 218, 0.3)";
