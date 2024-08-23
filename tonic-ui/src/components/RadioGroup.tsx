import {
  createRadioGroup,
  styled,
  ThemeableStack,
  withStaticProperties,
} from "tamagui";

const RadioGroupFrame = styled(ThemeableStack, {
  name: "RadioGroup",
  backgroundColor: "green",
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal",
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical",
      },
    },
  } as const,
});

export const RadioGroupItemFrame = styled(ThemeableStack, {
  name: "RadioGroup.Item",
  tag: "div",
  width: 32,
  height: 32,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  variants: {
    checked: {
      true: {
        backgroundColor: "white",
      },
      false: {
        backgroundColor: "lightgrey",
      },
    },
  },
});

export const RadioGroupIndicatorFrame = styled(ThemeableStack, {
  name: "RadioGroup.Indicator",
  backgroundColor: "$primary",
  width: 16,
  height: 16,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 8,
});

const StyledRadioGroup = createRadioGroup({
  Frame: RadioGroupFrame,
  Item: RadioGroupItemFrame,
  Indicator: RadioGroupIndicatorFrame,
});

const UnstyledRadioGroup = StyledRadioGroup.styleable((props, ref) => {
  return <StyledRadioGroup {...props} ref={ref} />;
});

const UnstyledRadioGroupItem = StyledRadioGroup.Item.styleable((props, ref) => {
  return <StyledRadioGroup.Item {...props} ref={ref} unstyled />;
});

const UnstyledRadioGroupIndicator = StyledRadioGroup.Indicator.styleable(
  (props, ref) => {
    return <StyledRadioGroup.Indicator {...props} ref={ref} unstyled />;
  },
);

export const RadioGroup = withStaticProperties(UnstyledRadioGroup, {
  Item: UnstyledRadioGroupItem,
  Indicator: UnstyledRadioGroupIndicator,
});

RadioGroupFrame.displayName = "RadioGroup";
RadioGroupItemFrame.displayName = "RadioGroup.Item";
RadioGroupIndicatorFrame.displayName = "RadioGroup.Indicator";
