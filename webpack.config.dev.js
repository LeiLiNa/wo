const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true,
	isElectron: false
};

module.exports = {
    //插件项
    devtool: 'inline-source-map',
    entry: {
        //vendor: ['react', 'react-dom'],
        app: './src/js/root.js'
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "dist/js"),
        publicPath: '/dist/js/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'config'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
         options: {
           noInfo: false,
           debug: true,
         }
       }),
         new HtmlWebpackPlugin({
	        title: '小能在线客服平台',
            filename: "./index.html"
         })
    ],
    devServer: {
        hot: true,
        inline: true,
        publicPath: '/dist/js/',
        contentBase: './',
        //自定义端口号
        port: '8080',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css']
    },
    module: {
	   rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015']
                        }
                    }
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader?limit=5000&name=fonts/[name].[ext]']
            },
            {
                test: /\.(jpe?g|png|gif|mp3|mp4)$/i,
                use: ['file-loader?name=[name].[ext]']
            }
        ]
    }
};
