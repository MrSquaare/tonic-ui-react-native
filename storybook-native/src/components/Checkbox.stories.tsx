import { Checkbox } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Check } from "@tamagui/lucide-icons";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onCheckedChange: {
      action: "onCheckedChange",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
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
  args: {},
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  ),
};
