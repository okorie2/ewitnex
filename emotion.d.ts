import "@emotion/react";

interface CustomTheme {
  common: {
    black: string;
    white: string;
  };
  shadow: {
    secondary: string;
    tertiary: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    lightGreen: string;
  };
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
