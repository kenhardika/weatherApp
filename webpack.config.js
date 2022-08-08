const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/script.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
  },
};