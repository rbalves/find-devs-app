import { Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  success: "#5DB075",
  danger: "#FF3030",
  gray1: "#262626",
  gray2: "#393939",
  gray3: "#454545",
  gray4: "#a3a3a3",
  blue1: "#044D65",
  blue2: "#07618D",
  blue3: "#0498B7",
  blue4: "#79C4CC",
  bgDark: "#282b30"
};

export const spacings = {
  xxsmall: 4,
  xsmall: 8,
  small: 12,
  base: 16,
  medium: 20,
  large: 24,
  xlarge: 28,
  xxlarge: 32,
};

export const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

export const fontConfig = {
  heading: {
    normal: "Roboto_400Regular",
    bold: "Roboto_700Bold",
  },
  body: {
    normal: "Nunito_400Regular",
    bold: "Nunito_700Bold",
  },
};

export const typography = {
  headlineXxlarge: {
    fontWeight: fontWeight.bold,
    fontSize: 42,
    lineHeight: 56,
    letterSpacing: 0.25,
  },
  headlineXlarge: {
    fontWeight: fontWeight.bold,
    fontSize: 36,
    lineHeight: 48,
    letterSpacing: 0.25,
  },
  headlineLarge: {
    fontWeight: fontWeight.bold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.25,
  },
  headlineMedium: {
    fontWeight: fontWeight.bold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0.15,
  },
  headlineSmall: {
    fontWeight: fontWeight.bold,
    fontSize: 26,
    lineHeight: 36,
    letterSpacing: 0.15,
  },
  headlineXsmall: {
    fontWeight: fontWeight.bold,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  subtitleLarge: {
    fontWeight: fontWeight.bold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  subtitleMedium: {
    fontWeight: fontWeight.bold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.01,
  },
  bodyLarge: {
    fontWeight: fontWeight.regular,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.05,
  },
  bodyMedium: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.05,
  },
  bodySmall: {
    fontWeight: fontWeight.regular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.25,
  },
  linkLarge: {
    fontWeight: fontWeight.bold,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.05,
  },
  linkMedium: {
    fontWeight: fontWeight.bold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.05,
  },
  linkSmall: {
    fontWeight: fontWeight.bold,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.25,
  },
};
