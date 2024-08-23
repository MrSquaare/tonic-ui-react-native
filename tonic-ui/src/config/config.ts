import { createAnimations } from "@tamagui/animations-react-native";
import { createTamagui, createTokens } from "@tamagui/core";

export const animations: Parameters<typeof createAnimations>[0] = {
  "100ms": {
    type: "timing",
    duration: 100,
  },
};

export const tokens: Parameters<typeof createTokens>[0] = {
  color: {
    primary: "#ffbd12",
    primary075: "#fbb500",
  },
  size: {},
  space: {},
  radius: {},
  zIndex: {},
};

process.env.TAMAGUI_DISABLE_NO_THEME_WARNING = "1";

export const config = createTamagui({
  animations: createAnimations(animations),
  tokens: createTokens(tokens),
});

export type Config = typeof config;

declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Config {}
}
