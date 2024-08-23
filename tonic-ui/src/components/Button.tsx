import {
  createStyledContext,
  styled,
  Text,
  View,
  withStaticProperties,
} from "@tamagui/core";

const ButtonContext = createStyledContext({
  size: undefined,
  variant: undefined,
});

const ButtonRoot = styled(View, {
  name: "Button",
  context: ButtonContext,
  tag: "button",
  role: "button",
  cursor: "pointer",
  animation: "100ms",
  animateOnly: ["backgroundColor", "borderBottomWidth", "y"],
  variants: {
    size: {
      sm: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
      },
      md: {
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
      },
      lg: {
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 16,
      },
    },
    variant: {
      filled: {
        backgroundColor: "$primary",
        borderColor: "black",
        borderWidth: 2,
        borderBottomWidth: 4,
        pressStyle: {
          y: 2,
          backgroundColor: "$primary075",
          borderBottomWidth: 2,
        },
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: 2,
        borderBottomWidth: 4,
        pressStyle: {
          marginTop: 2,
          borderBottomWidth: 2,
        },
      },
      transparent: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 2,
        borderBottomWidth: 4,
        pressStyle: {
          marginTop: 2,
          borderBottomWidth: 2,
        },
      },
    },
  } as const,
});

const ButtonText = styled(Text, {
  name: "Button.Text",
  context: ButtonContext,
  variants: {
    size: {
      sm: {
        fontSize: 12,
        fontWeight: 600,
      },
      md: {
        fontSize: 16,
        fontWeight: 600,
      },
      lg: {
        fontSize: 20,
        fontWeight: 600,
      },
    },
    variant: {
      filled: {
        color: "black",
      },
      outlined: {
        color: "black",
      },
      transparent: {
        color: "black",
      },
    },
  } as const,
});

export const Button = withStaticProperties(ButtonRoot, {
  Text: ButtonText,
});

Button.displayName = "Button";
Button.Text.displayName = "Button.Text";
