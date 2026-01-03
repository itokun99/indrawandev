import { createTamagui } from "tamagui"

const colorsPalette = {
  black: "#050505",
  darkGray: "#0a0a0a",
  white: "#ffffff",
  green: "#00ff00",
  amber: "#ffaa00",
  gray: "#1a1a1a",
}

const colors = {
  background: colorsPalette.black,
  foreground: colorsPalette.white,
  accent: colorsPalette.green,
  accentSecondary: colorsPalette.amber,
  border: colorsPalette.gray,
  card: colorsPalette.darkGray,
}

const tokens = {
  color: colors,
  space: {
    true: 8,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
  },
  size: {
    full: "100%",
    half: "50%",
    1: 4,
    2: 8,
    3: 12,
    4: 16,
  },
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 8,
    4: 12,
  },
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
  },
  typography: {
    fontFamily: {
      body: "KodeMono",
      heading: "KodeMono",
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
      "4xl": 36,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
}

export const config = createTamagui({
  tokens,
  themes: {
    light: {
      background: colorsPalette.black,
      foreground: colorsPalette.white,
      accent: colorsPalette.green,
      accentSecondary: colorsPalette.amber,
    },
  },
})

export type Conf = typeof config

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
