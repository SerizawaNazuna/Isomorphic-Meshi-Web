const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ]  
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/')
  }
};