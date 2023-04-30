const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
            }
        ]
    }
};
