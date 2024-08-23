module.exports = {
  root: true,
  extends: [
    "../.eslintrc.js",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
  ],
  env: { browser: true },
  plugins: ["react-refresh"],
  settings: {
    "import/ignore": ["react-native"],
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-curly-brace-presence": ["warn", { props: "always" }],
    "react/jsx-sort-props": ["warn"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
