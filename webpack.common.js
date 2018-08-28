const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackInlineAssetsPlugin = require('html-webpack-inline-assets-plugin');

 
const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

module.exports = {
   entry: {
        text: "./src/text.js",
        index: "./src/index.js",
        signup: "./src/signup.js",
        reservations: "./src/reservations.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js",
        publicPath: ''
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
    	rules: [
    	    {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'happypack/loader?id=js'
			},
			
            {
                test: /\.(jpg|png|svg)$/i,
                exclude: /fonts/,
                use: [
                    //'file-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true',
                    'file-loader?name=[name].[ext]&useRelativePath=true',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                                progressive: false,
                                quality: 70
                            }
                        }
                    }
                ]  
            },
            
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                exclude: /img/,
                use: [
                    {
                        loader: 'url-loader?limit=100000',
                        options: {
        				    name: 'fonts/[name].[ext]'
        				}
                    }
                ]
                
            }
		]
    },
    
    devServer: {
        compress: true,
        hot: true,
        open: true,
        inline: true
    },

    plugins: [

        new HappyPack({
          id: 'js',
          threads: 4,
          loaders: ['babel-loader?presets[]=env']
        }),
		
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
		}),
		
		new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',        
        })
	]
};
