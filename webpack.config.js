const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
    entry: {
        "index": "./src/main.js"
        // "input": './src/components/input.js',
        // "form": './src/components/form.js',
        // "formItem": './src/components/form-item.js',
        // "index": './src/components/index.js'
    },
    output: {
        filename: '[name].js',
        // libraryExport: 'default',
        // libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode: "none",
    devServer: {
        contentBase: 'public',
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ]
}
module.exports = config