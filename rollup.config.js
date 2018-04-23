import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import prettier from 'rollup-plugin-prettier'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const input = 'src/index.js'
const file = (name) => `dist/rollup/${name}.js`

export default [
  {
    input,
    output: [
      { format: 'cjs', file: file('cjs') },
      { format: 'es', file: file('es') }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({}),
      commonjs({}),
      prettier({})
    ]
  },
  {
    input,
    output: { format: 'iife', file: file('iife.dev'), sourcemap: 'inline' },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({}),
      commonjs({}),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    output: [
      { format: 'iife', file: file('iife.pro') },
      { format: 'umd', file: file('umd'), name: 'glonalName' }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({}),
      commonjs({}),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      uglify({}, minify)
    ]
  }
]