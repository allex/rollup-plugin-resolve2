// vim: set ft=javascript fdm=marker et ff=unix tw=80 sw=2:

import path from 'path'
import babel from 'rollup-plugin-babel'

const { version, name, author, license, dependencies } = require('./package.json')

const banner = `/**
 * ${name} v${version}
 *
 * @author ${author}
 * Released under the ${license} license.
 */`.trim()

export default {
  rollup: {
    destDir: path.join(__dirname, './lib'),
    entry: [
      {
        input: 'src/index.js',
        plugins: [ babel, 'resolve' ],
        targets: [
          { format: 'cjs', file: 'index.js', banner }
        ]
      }
    ]
  }
}
