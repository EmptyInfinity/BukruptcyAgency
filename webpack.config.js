let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node-modules'
            },
        ]
    },
    node: {
        fs: "empty",
        net: 'empty',
    }
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';

    return conf;
};