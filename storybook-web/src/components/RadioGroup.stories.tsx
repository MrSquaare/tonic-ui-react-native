import {
  RadioGroup,
  RadioGroupIndicatorFrame,
  RadioGroupItemFrame,
} from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Text } from "react-native";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1",
    onValueChange: fn(),
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value={"1"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value={"2"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value={"3"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup>
  ),
};

export const Uncontrolled: Story = {
  args: {
    onValueChange: fn(),
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value={"1"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value={"2"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value={"3"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup>
  ),
};

export const Debug: Story = {
  args: {
    onValueChange: fn(),
  },
  render: (args) => (
    <>
      <Text>Raw:</Text>
      <RadioGroup>
        <RadioGroupItemFrame checked={true}>
          <RadioGroupIndicatorFrame />
        </RadioGroupItemFrame>
        <RadioGroupItemFrame checked={false}></RadioGroupItemFrame>
        <RadioGroupItemFrame checked={false}></RadioGroupItemFrame>
      </RadioGroup>

      <Text>createRadioGroup:</Text>
      <RadioGroup {...args}>
        <RadioGroup.Item value={"1"}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <RadioGroup.Item value={"2"}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <RadioGroup.Item value={"3"}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
      </RadioGroup>
    </>
  ),
};
