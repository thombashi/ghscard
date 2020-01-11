const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === "development";

  return {
    entry: path.join(__dirname, "src", "main.ts"),
    output: {
      library: "ghscard",
      libraryTarget: "umd",
      path: path.join(__dirname, "dist"),
      filename: IS_DEVELOPMENT ? "ghscard.js" : "ghscard.min.js"
    },
    devtool: IS_DEVELOPMENT ? "source-map" : "none",
    externals: {
      jquery: "jQuery"
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
        statsFilename: IS_DEVELOPMENT ? "stats-dev.json" : "stats.json",
        statsOptions: { source: false }
      })
    ],
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
          new TerserPlugin({
            terserOptions: {
              compress: { drop_console: true },
            },
            extractComments: "all",
          })
        ]
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: "ts-loader"
      }]
    },
    resolve: {
      modules: [
        "node_modules",
      ],
      extensions: [
        ".ts",
        ".js"
      ]
    }
  }
};
