import { dirname, join } from "path";

import type { StorybookConfig } from "@storybook/react-vite";
import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  env: (config) => {
    return {
      ...config,
      TAMAGUI_TARGET: "web",
    };
  },
  viteFinal: (config) => {
    config.define = {
      ...config.define,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.TAMAGUI_TARGET": JSON.stringify("web"),
    };

    config.plugins?.push(
      tamaguiPlugin({
        components: [
          "@tamagui/core",
          "@tamagui/lucide-icons",
          "tamagui",
          "@mrsquaare/tonic-ui",
        ],
        config: "./tamagui.config.ts",
        platform: "web",
      }),
    );

    if (process.env.NODE_ENV === "production") {
      config.plugins?.push(
        tamaguiExtractPlugin({
          components: [
            "@tamagui/core",
            "@tamagui/lucide-icons",
            "tamagui",
            "@mrsquaare/tonic-ui",
          ],
          config: "./tamagui.config.ts",
          platform: "web",
        }),
      );
    }

    return config;
  },
};

export default config;
