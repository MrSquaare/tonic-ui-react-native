import { Input } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Input {...args} />,
};
