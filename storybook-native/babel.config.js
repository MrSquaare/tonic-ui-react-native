module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: [
            "@tamagui/core",
            "@tamagui/lucide-icons",
            "tamagui",
            "@mrsquaare/tonic-ui",
          ],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
    ],
  };
};
