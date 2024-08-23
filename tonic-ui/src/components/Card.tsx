import { styled, ThemeableStack } from "tamagui";

export const Card = styled(ThemeableStack, {
  name: "Card",
  borderColor: "black",
  borderWidth: 2,
  borderBottomWidth: 4,
  borderRadius: 12,
  padding: 16,
});

Card.displayName = "Card";
