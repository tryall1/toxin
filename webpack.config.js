const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const fs = require('fs')
const devMode = process.env.NODE_ENV === 'development';
const filename = (ext) => (devMode ? `${ext}/[name].${ext}` : `${ext}/[name].[contenthash].${ext}`);
var webpack = require('webpack');

const PAGES_DIR = path.resolve(__dirname, 'src/pages')
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .map((item) => item.replace(/\.[^/.]+$/, ''))
const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
}

const entryPoints = PAGES.map(page => ({ [page]: `${PAGES_DIR}/${page}/index.js`, }));
const entryPointsCorrect = Object.assign({}, ...entryPoints);

console.log('PATHS.src:', PATHS.src);

module.exports = {
    mode: 'production',
    entry: entryPointsCorrect,
    output: {
        filename: filename('js'),
        path: PATHS.dist,
        clean: false,
    },
    resolve: {
        alias: {
            '@variables': path.resolve(__dirname, `${PATHS.src}/styles/variables.scss`), //не работает
            
            'blocks': path.resolve(__dirname, '/src/blocks'),
            'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js'),
        },
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
        ...PAGES.map(
            (page) =>
              new HtmlWebpackPlugin({
                filename: `${page}.html`,
                template: `${PAGES_DIR}/${page}/${page}.pug`,
                chunks: [page],
              })
          ),
    
        /*new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pug/pages/ui.pug'),
            filename: 'ui.html',
        }),
        */
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
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