import { Button } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: Object.keys(Button.staticConfig.variants!.size),
    },
    variant: {
      control: "select",
      options: Object.keys(Button.staticConfig.variants!.variant),
    },
    onPress: {
      action: "onPress",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "filled",
  },
  render: (args) => (
    <Button {...args}>
      <Button.Text>Button</Button.Text>
    </Button>
  ),
};
