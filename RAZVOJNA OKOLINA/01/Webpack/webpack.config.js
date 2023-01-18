const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const oath = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'development',
    devServer: {

    },
    module: {
        rules: [{
            test: /.scss/,
            use: [
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}