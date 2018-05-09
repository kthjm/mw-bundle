import webpack from 'webpack'
import merge from 'webpack-merge'
import PrepackWebpackPlugin from 'prepack-webpack-plugin'
import { resolve } from 'path'

let manifest
try { manifest = require('./dist/webpack/dev/dll.manifest.json') }
catch(e) { console.log('manifest is not exist.') }

const devdir = resolve(__dirname, 'dist/webpack/dev')
const dllname = 'dll'
const port = 7000
const publicPath = `http://localhost:${port}/`
const baseConfig = {
  entry: './src',
  module: {
    rules: [
      { loader: 'babel-loader', test: /\.(js|jsx)$/ }
    ]
  }
}

const configs = {

  dll: {
    mode: 'none',
    entry: [
      'react',
      'react-dom',
      'atra'
    ],
    output: {
      filename: `${dllname}.js`,
      path: devdir,
      library: dllname
    },
    plugins: [
      new webpack.DllPlugin({
        path: resolve(devdir, `${dllname}.manifest.json`),
        name: dllname
      })
    ]
  },

  dev: merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: 'index.js',
      path: devdir
    },
    devServer: {
      port,
      publicPath,
      contentBase: devdir,
      watchContentBase: true,
      open: true,
      hot: true,
      overlay: true
    },
    plugins: [
      new webpack.DllReferencePlugin({ manifest }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }),

  pro: merge(baseConfig, {
    mode: 'production',
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'dist/webpack/pro')
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
    ]
  }),

  pre: merge(baseConfig, {
    mode: 'production',
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'dist/webpack/prepack')
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new PrepackWebpackPlugin()
    ]
  })
}

const { npm_lifecycle_event } = process.env
const suffix = npm_lifecycle_event.split(':')[1]
export default configs[suffix]