/* eslint-disable no-undef */
// https://github.com/apollographql/apollo-client/releases/tag/v3.5.4

const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
    "jsx",
  ],
};
