let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'js', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'ghscard.js'
    },
    devtool: 'source-map'
}
