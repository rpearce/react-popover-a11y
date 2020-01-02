import { dirname } from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  resolve(),
  external(),
  commonjs({ include: /node_modules/ }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const config = [
  {
    input: [
      './source/index.js',
      './source/Popover.js',
      './source/PopoverContent.js'
    ],
    output: [
      {
        dir: dirname(pkg.module),
        exports: 'named',
        format: 'esm',
        name: 'rpa-esm',
        sourcemap: true
      },
      {
        dir: dirname(pkg.main),
        exports: 'named',
        format: 'cjs',
        name: 'rpa-cjs',
        sourcemap: true
      }
    ],
    plugins
  },
  {
    input: './source/index.js',
    output: [
      {
        file: pkg.browser,
        exports: 'named',
        format: 'umd',
        name: 'rpa-umd',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react-button-a11y': 'ButtonA11y',
          '@rpearce/simple-uniqueid': 'uniqueId',
          'prop-types': 'propTypes',
          'react-with-forwarded-ref': 'withForwardedRef'
        }
      }
    ],
    plugins
  }
]

export default config
