const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
                
                //control API access boleh try utk privatekan access kepada whitelist IP shj
                //https://lisk.io/documentation/lisk-sdk/guides/node-management/api-access.html
                //"modules": {
                //"http_api": { 
                //"enabled": true, 
                //"access": { 
                //"public": false, 
                //"whiteList": ["127.0.0.1"], 
      },
                
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
