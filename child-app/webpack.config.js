const {
  withModuleFederationPlugin,
  share,
  // sharedMappings,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "child-app",
  filename: "remoteEntry.js",
  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },
  shared: {},
});
