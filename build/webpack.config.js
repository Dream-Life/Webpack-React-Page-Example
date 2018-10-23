const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../client/app.js')
    },
    output: {
        // [name] name = app - entry>app
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/pubilc'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader'
        }]
    }
}