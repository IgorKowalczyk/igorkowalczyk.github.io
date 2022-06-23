var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
 entry: [ '/pages/_app.js'	],
 module: {
  rules: [
   {
    use: "babel-loader",
    test: /\.js$/,
    exclude: /node_modules/,
    options: {
     plugins: ["lodash"],
     presets: [["env", { modules: false, targets: { node: 4 } }]],
    },
   },
  ],
 },
 plugins: [
  // Prettier ignore
  new CompressionPlugin(),
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
   'process.env.ASSET_PATH': JSON.stringify('./public/'),
   'process.env.VERSION': JSON.stringify(process.env.npm_package_version),
}),
 ],
};
