import webpack from 'webpack'
import { resolve } from 'path'

export const devDir = resolve(__dirname, 'dist/webpack/dev')
const name = 'dll'

export default {
  mode: 'none',
  entry: [
    'react',
    'react-dom',
    'atra'
  ],
  output: {
    filename: `${name}.js`,
    path: devDir,
    library: name
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve(devDir, `${name}.manifest.json`),
      name: name
    })
  ]
}