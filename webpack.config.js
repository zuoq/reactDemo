var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            },
            //{
            //    test: /\.(less|css)/,
            //    loader: ['css','autoprefixer','style!css!less']
            //},
            {
                test: /\.(less|css)/,
                exclude: /node_modules/,
                loaders: ['style','css', 'autoprefixer', 'less']
            },
            //{test: /\.css$/, loader: 'style!css'},
            //{test: /\.less$/, loader: 'style!css!less'},
            //{
            //    test: /\.(png|jpg)$/,
            //    exclude: /node_modules/,
            //    loader: 'url?limit=3000&name=img/[hash:8].[name].[ext]'
            //},
            //{
            //    test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: 'url'
            //},
            //{
            //    test: /\.(png|jpg)$/,
            //    exclude: /node_modules/,
            //    loader: 'url?limit=3000&name=img/[hash:8].[name].[ext]'
            //},
            {
                test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
                loader: 'url-loader',
            },
            //{
            //    test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: 'url'
            //},
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}