const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const minify = {
   /*
 collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
*/
}

module.exports = {
    mode: 'development',

    entry: {
        text: "./src/text.js",
        index: "./src/index.js",
        signup: "./src/signup.js",
        reservations: "./src/reservations.js"
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, './dist'),
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
        
        plugins.MiniCssExtractPlugin,        
        plugins.css,
        plugins.js,
        plugins.HotModuleReplacementPlugin,

		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['commons', 'index'],
            template: './src/index.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-help.html',
		    cache: false,
    		chunks: ['commons', 'reservations'],
            template: './src/reservations-help.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-limit.html',
		    cache: false,
    		chunks: ['commons', 'reservations'],
            template: './src/reservations-limit.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-login.html',
		    cache: false,
    		chunks: ['commons', 'reservations'],
            template: './src/reservations-login.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-upcoming.html',
		    cache: false,
    		chunks: ['commons', 'reservations'],
            template: './src/reservations-upcoming.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'reservations-past.html',
		    cache: false,
    		chunks: ['commons', 'reservations'],
            template: './src/reservations-past.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'signup.html',
		    cache: false,
    		chunks: ['commons', 'signup'],
            template: './src/signup.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'text.html',
		    cache: false,
    		chunks: ['commons', 'text'],
            template: './src/text.html',
            minify: false
		})
	
	],
	
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        /*
splitChunks: { // CommonsChunkPlugin()
            name: 'commons',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
*/
    }
};



