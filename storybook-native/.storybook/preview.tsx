import { TonicUIProvider } from "@mrsquaare/tonic-ui";
import type { Preview } from "@storybook/react";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <TonicUIProvider>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </TonicUIProvider>
    ),
  ],
};

export default preview;
