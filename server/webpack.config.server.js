const path = require('path')

module.exports = {
    // 执行环境，一般是浏览器，这里是node
    target: 'node',
    entry: {
        app: path.resolve(__dirname, './server-entry.js')
    },
    output: {
        // [name] name = app - entry>app
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2',
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
    }
}