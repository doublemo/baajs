const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode:"development",
    entry:"./src/index.ts",
    output: {
        filename: 'baajs.min.js',
        library: 'baa',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8088,
        open:true,
        hot:true,
        contentBase:'./.out'
    }
}
