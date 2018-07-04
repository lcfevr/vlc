/**
 * 本地预览
 */

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


process.env.NODE_ENV = '"production"'
module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path:path.join(__dirname, './dist-prod'),
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[name].chunk.[hash].js'
    },
    resolve: {
        alias: {
            vlc: './src/index',
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': process.env.NODE_ENV,
        }),
        // new ExtractTextPlugin({ filename: '[name].css', disable: true, allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.[hash].js' }),
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                babel:{
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: '../dist-prod/index.html',
            template: './src/template/index.ejs'
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            output: { // 删除打包后的注释
                comments: false
            }
        }),

        new FriendlyErrorsPlugin()
    ]
});

