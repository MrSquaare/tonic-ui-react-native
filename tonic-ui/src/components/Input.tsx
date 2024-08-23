import { styled, Input as TGInput } from "tamagui";

const UnstyledInput = TGInput.styleable((props, ref) => {
  return <TGInput {...props} ref={ref} unstyled />;
});

export const Input = styled(UnstyledInput, {
  name: "Input",
  backgroundColor: "white",
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 12,
  padding: 16,
  selectionColor: "$primary",
});

Input.displayName = "Input";
