import { TonicUIProvider } from "@mrsquaare/tonic-ui";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <TonicUIProvider>
        <Story />
      </TonicUIProvider>
    ),
  ],
};

export default preview;
