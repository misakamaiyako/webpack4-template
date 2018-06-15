const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');

module.exports =  merge(webpackBaseConfig,{
    mode: 'development',
    devtool: '#source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        index: 'index.htm',
        open: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // filename: './index.html',
            // template: './src/template/index.ejs',
            // inject: false
            title: '1231231232'
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Hot Module Replacement'
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
})