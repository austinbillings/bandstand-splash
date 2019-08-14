const path = require('path');
const open = require('opn');
const webpack = require('webpack');
const bundleName = 'bundle';

const prodMode = (process.env.NODE_ENV === 'production');
const plugins = [
	new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
];
const PORT = 42418;

if (prodMode) {
	const divider = new Array(20).fill('-=~').join('');

	console.log(divider);
	console.log('\t BUNDLING FOR PRODUCTION :::: EXPECT DELAYS')
	console.log(divider);

	const minifier = new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		output: { comments: false }
	});
	plugins.push(minifier);
} else {
    open(`http://localhost:${PORT}`);
}

module.exports = {
	entry: path.join(__dirname, '/src/index.jsx'),
	devtool: 'source-map',
    mode: 'production',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: `${bundleName}.js`,
		publicPath: '/dist/'
	},
	devServer: {
    port: PORT,
    historyApiFallback: {
	    index: 'index.html'
    }
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' }
				]
			},
			{
				test: /\.scss$/,
				exclude: /bower_components/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{ loader: 'file-loader' }
				]
			},
			{
			  test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			  loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
			  test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			  loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
			  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			  loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
			},
			{
			  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			  loader: 'file-loader'
			},
			{
			  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
			}
		]
	},
	resolve: {
		alias: {
            arkade: path.resolve(__dirname, 'arkade'),
			['font-awesome']: path.resolve(__dirname, 'node_modules/font-awesome/css/font-awesome.css')
		},
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules')
		],
		descriptionFiles: ['package.json'],
		extensions: ['.js', '.jsx', '.scss', '.css', '.json']
	},
	plugins,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000 // is this the same as specifying --watch-poll?
  }
};
