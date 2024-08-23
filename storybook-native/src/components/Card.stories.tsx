import { Card } from "@mrsquaare/tonic-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <Text>Card child</Text>
    </Card>
  ),
};
