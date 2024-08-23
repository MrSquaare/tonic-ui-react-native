import { Checkbox } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Check } from "@tamagui/lucide-icons";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    onCheckedChange: fn(),
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  ),
};

export const Uncontrolled: Story = {
  args: {
    onCheckedChange: fn(),
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  ),
};
