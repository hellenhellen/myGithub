/**
 * Created by welcome on 2017/3/27.
 */
var webpack = require('webpack');
var htmlwebpackplugin=require('html-webpa')

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './index.js'
    },
    //入口文件输出配置
    output: {
        path: 'build',
        filename: 'build.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    plugins:{

    }
};