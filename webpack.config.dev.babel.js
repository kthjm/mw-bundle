import webpack from 'webpack'
import merge from 'webpack-merge'
import { resolve } from 'path'
import { baseConfig } from './webpack.config.babel.js'
import { devDir as path } from './webpack.config.dll.babel.js'
import manifest from './dist/webpack/dev/dll.manifest.json'

const port = 7000
const publicPath = `http://localhost:${port}/`

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path
  },
  devServer: {
    port,
    publicPath,
    contentBase: path,
    watchContentBase: true,
    open: true,
    hot: true,
    overlay: true
  },
  plugins: [
    new webpack.DllReferencePlugin({ manifest }),
    new webpack.HotModuleReplacementPlugin()
  ]
})