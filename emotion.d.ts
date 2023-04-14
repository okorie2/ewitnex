import "@emotion/react";

interface CustomTheme {
  common: {
    black: string;
    white: string;
  };
  shadow: {
    secondary: string;
    tertiary: string;
    border: string;
    border2: string;
    border3: string;
    border4: string;
  };
  background: {
    primary: string;
    secondary: string;
    secondary2: string;
    tertiary: string;
    lightGreen: string;
  };
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
