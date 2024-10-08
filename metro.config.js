const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push("cjs");

const config = getSentryExpoConfig(__dirname, defaultConfig);

module.exports = config;
