// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");

const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..");

const { generate } = require("@storybook/react-native/scripts/generate");

generate({
  configPath: path.resolve(__dirname, "./.storybook"),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Since we are using pnpm, we have to setup the monorepo manually for Metro
// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot];
// #2 - Try resolving with project modules first, then workspace modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// Use turborepo to restore the cache when possible
config.cacheStores = [
  new FileStore({
    root: path.join(projectRoot, "node_modules", ".cache", "metro"),
  }),
];

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push("mjs");

module.exports = config;
