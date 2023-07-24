import { NullstackClientContext } from 'nullstack'

import type { RustModuleExports } from './types'

export default async function loadWASM(context?: NullstackClientContext) {
  const { environment } = context || {}
  if (environment?.production && environment?.client) {
    return instantiateWASM()
  }
  return (await import('./main.wasm')) as RustModuleExports
}

async function instantiateWASM() {
  // eslint-disable-next-line import/no-unresolved
  const WASMUrl = (await import('./main.wasm?resource')).default
  const Buffer = await (await fetch(WASMUrl)).arrayBuffer()
  return (await WebAssembly.instantiate(Buffer)).instance
    .exports as RustModuleExports
}
