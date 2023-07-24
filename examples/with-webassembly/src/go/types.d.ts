/* eslint-disable */
declare global {
  class Go {
    run(instance: WebAssembly.WebAssemblyInstantiatedSource['instance']): void
    importObject: Record<string, any>
  }
}

export type GoModuleExports = {
  multiply(x: number, y: number): number
}

export {}
