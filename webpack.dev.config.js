const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode:"development",
    entry:"./src/index.ts",
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        library: "baa",
        path: path.resolve(__dirname, 'dist'),
    },

    performance: {
	    hints: "warning", // 枚举
	    hints: "error", // 性能提示中抛出错误
	    hints: false, // 关闭性能提示
	    maxAssetSize: 200000, // 整数类型（以字节为单位）
	    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
	    assetFilter: function(assetFilename) {
	      // 提供资源文件名的断言函数
	      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
	    }
	},

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
    },
    plugins:[
        // new HtmlWebpackPlugin({
        //     template:"./public/index.html"
        // }),
        
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8088,
        open:true,
        hot:true,
        contentBase: path.join(__dirname, "public"),
        watchContentBase:true,
        compress: true,
        disableHostCheck: true
    }
}
