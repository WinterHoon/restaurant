 let path = require('path');
 let HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry: "./src/app.js",

     output: {
         filename: "bundle.js",
         path: path.resolve(__dirname, 'dist')
     },

     mode: 'development',
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         compress: true,
         port: 3000,
         open: true
     }
 }