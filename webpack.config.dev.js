/*eslint-env node */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './app/index',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        alias: {
            geodata: path.join(__dirname, 'app/data/usa.json')
        }
    },
};
