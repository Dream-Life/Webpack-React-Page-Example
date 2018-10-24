const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    entry: {
        app: path.resolve(__dirname, '../client/app.js')
    },
    output: {
        // [name] name = app - entry>app
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/public'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, '../node_modules')
            ]
        }]
    },
    plugins: [
        // 打包生成html，其中的js等文件可以直接在html上引入
        new HTMLPlugin({
            template: path.resolve(__dirname, '../client/template.html')
        })
    ]
}

if (isDev) {

}

module.exports = config