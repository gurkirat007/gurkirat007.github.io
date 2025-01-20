const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'development'
};
