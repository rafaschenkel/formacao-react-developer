const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    devServer: {
        port: 5500
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html&/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
