import fs from 'fs'
import path from 'path'

require('./wasm_exec')
const GO = new Go()

// eslint-disable-next-line import/no-unresolved
import mainWASM from './main.wasm?resource'
import type { GoModuleExports } from './types'

let wasmBuffer
let wasmModule

export function readWASMFile(filename: string) {
  const pureFilename = filename.replace(/\?resource$/, '')
  return fs.readFileSync(path.join(__dirname, pureFilename))
}

async function saveBuffer() {
  if (window?.document) {
    wasmBuffer = await (await fetch(mainWASM)).arrayBuffer()
  } else {
    wasmBuffer = readWASMFile(mainWASM)
  }
}

export default async function () {
  if (!wasmBuffer) await saveBuffer()
  if (!wasmModule) {
    wasmModule = await WebAssembly.instantiate(wasmBuffer, GO.importObject)
    GO.run(wasmModule.instance)
  }
  return wasmModule.instance.exports as GoModuleExports
}
