//how to use
//font: ${({ theme }) => theme.font.display1};
// color: ${({ theme }) => theme.color.primary};

const color = {
  primary: "#FDCB02",
  primary_light: "#FFE371",
  primary_lighter: "#FFEEBA",
  primary_soft: "#F8D05F",
  primary_dark: "#FCB34A",
  primary_darker: "#F29C4A",
  white: "#FFFFFF",
  lightgray1: "#F8F7F6",
  lightgray2: "#DFDFDF",
  gray1: "#C1C1C1",
  gray2: "#A5A5A5",
  gray3: "#6F6F6F",
  darkgray1: "#3D3D3D",
  darkgray2: "#1A1A1A",
  darkgray3: "#797979",
  black: "#000000",
  bg_yellow: "#FFFCF1",
  bg_gray: "#F8F8F8",
  bg_sky: "#F0F8FE",
  sky_blue: "#73ACFF",
  marine_blue: "#3C89FF",
  mina_blue: "#296CE1",
  deep_blue: "#0E57E2",
  honest_blue: "#003089",
};

/**
 * bold: 700
 * medium: 600
 * regular: 400
 * light: 300
 */
const font = {
  display2: "normal 700 3.2rem/136% 'Noto Sans kr'",
  display1: "normal 400 2.4rem/2.4rem 'Noto Sans kr'",
  headline: "normal 600 2.4rem/150% 'Noto Sans kr'",
  headline2: "normal 300 2.4rem/2.4rem 'Noto Sans kr'",
  title2: "normal 700 1.8rem/160% 'Noto Sans kr'",
  title1: "normal 700 1.6rem/1.6rem 'Noto Sans kr'",
  subheading: "normal 600 1.6rem/1.6rem 'Noto Sans kr'",
  description: "normal 400 1.4rem/2.3rem 'Noto Sans kr'",
  body3: "normal 400 1.6rem/153% 'Noto Sans kr'",
  body2: "normal 400 1.4rem/156% 'Noto Sans kr'",
  body1: "normal 400 1.2rem/160% 'Noto Sans kr'",
  caption: "normal 400 1.2rem/1.2rem 'Noto Sans kr'",
  gnb: "normal 600 1.4rem/1.4rem 'Spoqa Han Sans Neo'",
  button: "normal 600 1.8rem/1.8rem 'Spoqa Han Sans Neo'",
  button_middle: "normal 600 1.6rem/1.6rem 'Spoqa Han Sans Neo'",
  button_small: "normal 400 1.2rem/1.2rem 'Spoqa Han Sans Neo'",
};

const theme = {
  color,
  font,
};

export default theme;
