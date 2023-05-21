const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: "production",
  resolve: {
    fallback: { 
      "path": require.resolve("path-browserify"),
      "os" : require.resolve("os-browserify/browser")
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
}