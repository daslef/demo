var path = require('path');
var webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

module.exports = function (env) {
    var pack = require('./package.json');
    var MiniCssExtractPlugin = require('mini-css-extract-plugin');

    var production = !!(env && env.production === 'true');
    var asmodule = !!(env && env.module === 'true');
    var standalone = !!(env && env.standalone === 'true');

    var babelSettings = {
        extends: path.join(__dirname, '/.babelrc'),
    };

    var config = {
        node: {
            fs: 'empty',
        },
        mode: production ? 'production' : 'development',
        entry: {
            frontend: './src/frontend.js',
            backend: './server/index.js',
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/build/',
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].bundle.js',
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader?' + JSON.stringify(babelSettings),
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
                webix: path.resolve(
                    __dirname,
                    'node_modules',
                    'webix',
                    'webix.min.js'
                ),
                'jet-views': path.resolve(__dirname, 'src/views'),
                'jet-locales': path.resolve(__dirname, 'src/locales'),
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '/css/style.css',
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
