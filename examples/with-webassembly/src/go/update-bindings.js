const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const GOROOT = spawnSync('tinygo', ['env', 'TINYGOROOT'], {
  encoding: 'utf8',
}).stdout.replace('\n', '')

fs.copyFileSync(
  path.join(GOROOT, '/targets/wasm_exec.js'),
  path.join(__dirname, 'wasm_exec.js'),
)
