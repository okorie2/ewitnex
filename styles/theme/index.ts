import { Theme } from "@emotion/react";

const breakpoints = [576, 768, 1024, 1440];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const lg = `@media (min-width: 1025px) and (max-width: 1340px)`;
export const screen = {
  mobile: mq[0],
  tablet: mq[1],
  desktop: mq[2],
  desktopLg: mq[3],
  lg,
};

export const theme: Theme = {
  common: { black: "#000", white: "#fff" },
  shadow: {
    secondary: "#AEAEAE",
    tertiary: "#707070",
    border: "#E4E4E4",
    border2: "#C0C0C0",
    border3:"#00000029",
    border4:"#0000001A",
  },
  color: {
    primary: "#7C35AB",
    positive: "",
    negative: "#F05E78",
    tertiary: "#707070",
    grey: "#AEAEAE",
  },
  background: {
    primary: "#7C35AB",
    secondary: "#F5F5F5",
    secondary2:"#F2F7FB",
    tertiary: "#528FFE",
    lightGreen: "#00D9B7",
  },
};
