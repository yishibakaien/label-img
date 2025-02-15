import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from '../package.json'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { name, input } from './config'

export default [
  {
    input: input.main,
    output: {
      name,
      file: pkg.main,
      format: 'umd'
    },
    plugins: [
      json(),
      resolve(),
      commonjs({
        extensions: ['.js', '.ts']
      }),
      typescript(),
      terser()
    ]
  }
]
