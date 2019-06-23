// Webpack v4
const path = require("path");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin(
        //   {filename: 'style.css'}
        // ),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),

        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        quiet: false,
        stats: "errors-only",
        clientLogLevel: "warning",
        compress: true,
        port: 9001
    }
};