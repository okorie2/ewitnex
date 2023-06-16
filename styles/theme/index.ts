
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

