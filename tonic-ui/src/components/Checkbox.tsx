import {
  createCheckbox,
  styled,
  ThemeableStack,
  useGetThemedIcon,
  withStaticProperties,
} from "tamagui";

const CheckboxFrame = styled(ThemeableStack, {
  name: "Checkbox",
  width: 32,
  height: 32,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 10,
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
  animation: "100ms",
  variants: {
    checked: {
      true: {
        backgroundColor: "$primary",
      },
      indeterminate: {
        backgroundColor: "$primary",
      },
      false: {
        backgroundColor: "lightgrey",
      },
    },
    disabled: {
      true: {
        backgroundColor: "lightgrey",
      },
    },
  } as const,
});

const CheckboxIndicatorFrame = styled(ThemeableStack, {
  name: "Checkbox.Indicator",
  scale: 1,
  animation: "100ms",
  enterStyle: {
    scale: 0,
  },
  exitStyle: {
    scale: 0,
  },
});

const StyledCheckbox = createCheckbox({
  Frame: CheckboxFrame,
  Indicator: CheckboxIndicatorFrame,
});

export const UnstyledCheckbox = StyledCheckbox.styleable((props, ref) => {
  return <StyledCheckbox {...props} ref={ref} unstyled />;
});

export const UnstyledCheckboxIndicator = StyledCheckbox.Indicator.styleable(
  (props, ref) => {
    const getThemedIcon = useGetThemedIcon({ color: "black", size: 20 });
    const themedIcon = getThemedIcon(props.children);

    return (
      <StyledCheckbox.Indicator {...props} ref={ref} unstyled>
        {themedIcon}
      </StyledCheckbox.Indicator>
    );
  },
);

export const Checkbox = withStaticProperties(UnstyledCheckbox, {
  Indicator: UnstyledCheckboxIndicator,
});

Checkbox.displayName = "Checkbox";
Checkbox.Indicator.displayName = "Checkbox.Indicator";
