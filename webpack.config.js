const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('public'),
		filename: 'bundles.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				user: {
					loader: 'babel-loader'
				}
			}
		]
	}
};