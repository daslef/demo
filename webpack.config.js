var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

module.exports = function (env) {
    const pack = require('./package.json');
    const production = !!(env && env.production === 'true');
    const asmodule = !!(env && env.module === 'true');
    const standalone = !!(env && env.standalone === 'true');

    const config = {
        mode: production ? 'production' : 'development',
        entry: {
            app: './src/frontend.js',
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/build/',
            filename: '[name].js',
            chunkFilename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: 'url-loader?limit=25000',
                },
                {
                    test: /\.(less|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                    ],
                },
            ],
        },
        stats: 'minimal',
        resolve: {
            extensions: ['.js'],
            modules: ['./src', 'node_modules'],
            alias: {
                'jet-views': path.resolve(__dirname, 'src/views'),
                'jet-locales': path.resolve(__dirname, 'src/locales'),
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION: production,
                BUILD_AS_MODULE: asmodule || standalone,
            }),
        ],
    };

    if (!production) {
        config.devtool = 'inline-source-map';
    }

    if (asmodule) {
        if (!standalone) {
            config.externals = config.externals || {};
            config.externals = ['webix-jet'];
        }

        const out = config.output;
        const sub = standalone ? 'full' : 'module';

        out.library = pack.name.replace(/[^a-z0-9]/gi, '');
        out.libraryTarget = 'umd';
        out.path = path.join(__dirname, 'dist', sub);
        out.publicPath = '/dist/' + sub + '/';
    }

    return config;
};
