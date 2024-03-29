import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      positive: string;
      negative: string;
      tertiary: string;
      grey:string;
      grey2:string;
      lightGreen: string;
      blue:string;
      tableBlack: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
// import "@emotion/react";
// import { LibTheme } from "some-lib";

// declare module "@emotion/react" {
//   export interface Theme extends LibTheme {}
// }
