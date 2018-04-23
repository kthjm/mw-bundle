import webpack from 'webpack'
import merge from 'webpack-merge'
import { resolve } from 'path'

export const baseConfig = {
  entry: './src',
  module: {
    rules: [
      { loader: 'babel-loader', test: /\.(js|jsx)$/ }
    ]
  }
}

export default merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist/webpack/pro')
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
  ]
})