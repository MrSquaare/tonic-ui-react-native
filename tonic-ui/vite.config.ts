import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: "./src/index.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-native",
        "react/jsx-runtime",
        "@tamagui/core",
        "tamagui",
        "@tamagui/animations-moti",
        "@tamagui/animations-react-native",
        "react-native-reanimated",
      ],
    },
  },
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      tsconfigPath: "tsconfig.app.json",
    }),
  ],
});
