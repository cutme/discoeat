const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceMap = true;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

console.log(process.env.NODE_ENV);

module.exports = {
    mode: 'production',
    devtool: 'source-map',

    entry: {
        text: "./src/text.js",
        index: "./src/index.js",
        signup: "./src/signup.js",
        reservations: "./src/reservations.js"
    },
    
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].bundle.js",
        publicPath: ''
    },

    module: {
    	rules: [
			loaders.css,
            loaders.fonts,
            loaders.images,
            loaders.js,
        ]
    },

    plugins: [
        new ProgressBarPlugin(),
        
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),

        createHappyPlugin('scss', ['css-loader?importLoaders:1!postcss-loader!sass-loader']),
        
        plugins.js,
        
		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['vendors', 'index'],
            template: './src/index.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-help.html',
		    cache: false,
    		chunks: ['vendors', 'reservations'],
            template: './src/reservations-help.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-limit.html',
		    cache: false,
    		chunks: ['vendors', 'reservations'],
            template: './src/reservations-limit.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-login.html',
		    cache: false,
    		chunks: ['vendors', 'reservations'],
            template: './src/reservations-login.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-upcoming.html',
		    cache: false,
    		chunks: ['vendors', 'reservations'],
            template: './src/reservations-upcoming.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-past.html',
		    cache: false,
    		chunks: ['vendors', 'reservations'],
            template: './src/reservations-past.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'signup.html',
		    cache: false,
    		chunks: ['vendors', 'signup'],
            template: './src/signup.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'text.html',
		    cache: false,
    		chunks: ['vendors', 'text'],
            template: './src/text.html',
            minify: false
		})
	],
	
	optimization: {
        namedModules: true, // NamedModulesPlugin()
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
    }
};


function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        verbose: false,
    });
}

