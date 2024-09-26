/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#DD9ADD";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  brand: {
    primary: "#92A3FD",
    secondary: "#9DCEFF",
    muted: "#C6DAF7",
    grad1: "#C58BF2",
    grad2: "#EEA4CE",
    gray: "#131313",
    headercolor: "#1D1617",
  },
  ui: {
    primary: "#EF7D00",
    secondary: "#1D1617",
    disabled: "#DEDEDE",
    error: "#E62582",
    success: "#138000",
  },
  bg: {
    primary: "#F7F8F8",
    secondary: "#F1F1F1",
    tertiary: "#FFF9EB",
  },
  text: {
    primary: "#7B6F72",
    secondary: "#ADA4A5",
    disabled: "#DDDADA",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  },
};
