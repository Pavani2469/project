const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    querystring: require.resolve("querystring-es3"),
    url: require.resolve("url"),
    fs: false,
    net: false,
  };
  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin(),
  ]);
  return config;
};

