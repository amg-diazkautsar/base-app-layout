const { merge } = require("webpack-merge");
const webpack = require('webpack')
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "amg",
    projectName: "micro-fe-base-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1, // Ensure that PostCSS is processed
              },
            },
            'postcss-loader', // Ensure PostCSS is used to process CSS
          ],
        }
      ],
    }, 
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  });
};
