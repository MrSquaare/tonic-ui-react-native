import { Switch } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onCheckedChange: {
      action: "onCheckedChange",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <Switch {...args}>
      <Switch.Thumb />
    </Switch>
  ),
};

export const Uncontrolled: Story = {
  args: {},
  render: (args) => (
    <Switch {...args}>
      <Switch.Thumb />
    </Switch>
  ),
};
