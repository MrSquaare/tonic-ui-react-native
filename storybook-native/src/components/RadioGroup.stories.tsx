import {
  RadioGroup,
  RadioGroupIndicatorFrame,
  RadioGroupItemFrame,
} from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onValueChange: {
      action: "onValueChange",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1",
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
  args: {},
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
  args: {},
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
