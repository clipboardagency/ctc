const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'ctc.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'CTC',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
