const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000, //max image size
        maxAssetSize: 512000 //lazy load
    },
    devServer: {
        port: 9000, 
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pug/pages/index.pug')
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pug/pages/ui.pug'),
            filename: 'ui.html',
        }),

        new MiniCssExtractPlugin({
            filename: "main.css",
            chunkFilename: "[id].css",
        })
    ],

    module: {
        rules: [
            {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]},
            {
                test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './images/[name][ext]',
                },
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    }
}