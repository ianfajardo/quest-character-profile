const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const webpackCopy = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].min.css",
  chunkFilename: "[id].css"
});

var envmode = "development";

if (process.env.NODE_ENV === "production") {
  envmode = "production";
  console.log("production build");
}

module.exports = [
  {
    mode: envmode,
    entry: {
      main: "./public/js/main.js"
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dest")
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      watchContentBase: true,
      hot: true,
      overlay: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              minified: false,
              compact: false
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[path][name].[ext]"
          }
        }
      ]
    },
    resolve: {
      alias: {
        masonry: "masonry-layout",
        isotope: "isotope-layout",
        vue: "vue/dist/vue.js"
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      }),
      new webpack.HotModuleReplacementPlugin(),
      extractSass,
      new webpackCopy([
        {
          from: path.resolve(__dirname, "public/index.html"),
          to: path.resolve(__dirname, "dest")
        }
      ]),
      new VueLoaderPlugin()
    ]
  }
];
