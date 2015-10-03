/*eslint-env node */

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: 'dist'
    },
    module: {
        preLoaders: [
            { test: /\.json$/, loader: 'json-loader' }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    optional: ['es7.classProperties']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
//            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};
