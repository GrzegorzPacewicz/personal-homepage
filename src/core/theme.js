const color = {
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  semiDark: "#363636",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  githubTileHover: "rgba(3, 102, 214, 0.5)",
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
    },
    subheader: {
      title: color.mineShaft,
    },
    skills: {
      background: color.white,
      text: color.slateGray,
      point: color.scienceBlue,
    },
    portfolio: {
      logo: color.scienceBlue,
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
      logo: color.dodgerBlue,
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
