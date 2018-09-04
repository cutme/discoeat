const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _webpack = require('webpack');

const HotModuleReplacementPlugin = new _webpack.HotModuleReplacementPlugin();



const css = new HappyPack({
    id: 'scss',
    threadPool: happyThreadPool,
    use: [
        {
            loader: 'style-loader',
        },

        {
            loader: 'css-loader',
            options: {
                minimize: true,
                sourceMap: false
            }
        },

        {
            loader: 'postcss-loader',
            options: {
                sourceMap: false
            }
        },

        {
            loader: 'sass-loader',
            options: {
                sourceMap: false
            }
        }
    ]
});

const js = new HappyPack({
    id: 'js',
    threadPool: happyThreadPool,
    loaders: ['babel-loader?presets[]=env']
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: "[name].css"
});


module.exports = {
    css: css,
    js: js,
    HotModuleReplacementPlugin: HotModuleReplacementPlugin,
    MiniCssExtractPlugin: MiniCssExtractPlugin
};
