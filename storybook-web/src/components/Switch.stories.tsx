import { Switch } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    onCheckedChange: fn(),
  },
  render: (args) => (
    <Switch {...args}>
      <Switch.Thumb />
    </Switch>
  ),
};

export const Uncontrolled: Story = {
  args: {
    onCheckedChange: fn(),
  },
  render: (args) => (
    <Switch {...args}>
      <Switch.Thumb />
    </Switch>
  ),
};
