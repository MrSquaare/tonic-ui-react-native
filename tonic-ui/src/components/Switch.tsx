import {
  createSwitch,
  styled,
  ThemeableStack,
  withStaticProperties,
} from "tamagui";

const SwitchFrame = styled(ThemeableStack, {
  name: "Switch",
  width: 60,
  height: 36,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 18,
  padding: 0,
  animation: "100ms",
  variants: {
    checked: {
      true: {
        backgroundColor: "$primary",
      },
      false: {
        backgroundColor: "lightgrey",
      },
    },
  } as const,
});

const SwitchThumbFrame = styled(ThemeableStack, {
  name: "Switch.Thumb",
  backgroundColor: "white",
  width: 36,
  height: 36,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 18,
  alignItems: "center",
  justifyContent: "center",
  top: -2,
  animation: "100ms",
  variants: {
    checked: {
      true: {
        right: -2,
      },
      false: {
        left: -2,
      },
    },
  } as const,
});

const SwitchThumbDotFrame = styled(ThemeableStack, {
  name: "Switch.Thumb.Dot",
  backgroundColor: "white",
  width: 16,
  height: 16,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 8,
});

const StyledSwitch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumbFrame,
});

const UnstyledSwitch = StyledSwitch.styleable((props, ref) => {
  return <StyledSwitch {...props} ref={ref} unstyled />;
});

const UnstyledSwitchThumb = StyledSwitch.Thumb.styleable((props, ref) => {
  return (
    <StyledSwitch.Thumb {...props} ref={ref} unstyled>
      <SwitchThumbDotFrame />
    </StyledSwitch.Thumb>
  );
});

export const Switch = withStaticProperties(UnstyledSwitch, {
  Thumb: UnstyledSwitchThumb,
});

Switch.displayName = "Switch";
Switch.Thumb.displayName = "Switch.Thumb";
