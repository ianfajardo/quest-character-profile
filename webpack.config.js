const path = require('path');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const webpack = require('webpack');

 const extractSass = new MiniCssExtractPlugin({
   filename: "[name].min.css",
   chunkFilename: "[id].css"
 });

 var envmode = 'development';

 if (process.env.NODE_ENV == 'production') {
   envmode = 'production';
 }

 module.exports = [{
   mode: envmode,
   entry: {
     main: './public/js/main.js'
   },
   output: {
     filename: '[name].min.js',
     path: path.resolve(__dirname, 'dest')
   },
   devtool: 'source-map',
   devServer: {
     contentBase: path.join(__dirname, 'public'),
     watchContentBase: true,
     hot: true,
     overlay: true
   },
   module: {
     rules: [{
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             minified: false,
             compact: false
           }
         }
       },
       {
         test: /\.(sa|sc|c)ss$/,
         use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader',
         ],
       }
     ]
   },
   resolve: {
     alias: {
       'masonry': 'masonry-layout',
       'isotope': 'isotope-layout',
       'vue': 'vue/dist/vue.js'
     }
   },
   plugins: [
     new webpack.ProvidePlugin({
       $: 'jquery',
       jquery: 'jquery',
       'window.jQuery': 'jquery',
       jQuery: 'jquery'
     }),
      /*new HtmlWebpackPlugin({
        title: 'Development',
        template: './public/index.html'
      }),*/
     new webpack.HotModuleReplacementPlugin(),
     extractSass
   ]
 }];
