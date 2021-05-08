const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 静态文件打包处理

module.exports = {
    mode: 'development', // 环境变量配置
    entry: './index.ts', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包路径
        filename: 'index.js', // 文件名称
        publicPath: '/public',
        library: {
            type: 'commonjs'
        },
    },
    devtool: 'source-map', // 开启source-map
    target: 'node', // 打包目标
    stats: {
        errorDetails: true // 开启打包错误信息详情
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'], // 设置解析
        modules: [path.join(__dirname, './src'), 'node_modules']
    },
    externals: {
        // 额外需要安装的包不需要进入打包环境
        express: 'express',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // {from: path.join(__dirname, "./public/**"), to: path.join(__dirname, "./dist/public/**")}
                {from: './public/**', to: './public/[name].[ext]'}
            ]
        })
    ]
}